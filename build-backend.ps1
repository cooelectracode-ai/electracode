<#
.SYNOPSIS
    Scaffolds the FastAPI backend structure (models, schemas, routes, core,
    alembic config) inside an existing backend/ folder that currently only
    has requirements.txt. Safe to re-run - skips files that already exist
    unless -Force is passed.

.NOTES
    Run from the project root (the folder containing frontend/ and backend/):
        powershell -ExecutionPolicy Bypass -File .\build-backend.ps1
    Or double-click build-backend.bat
#>

param([switch]$Force)

$BackendRoot = "backend"

if (-not (Test-Path $BackendRoot)) {
    Write-Host "ERROR: '$BackendRoot' folder not found. Run this from your project root." -ForegroundColor Red
    Read-Host "Press Enter to close"
    exit 1
}

$Created = @()
$Skipped = @()

function New-ProjectFile {
    param([string]$RelativePath, [string]$Content)
    $fullPath = Join-Path $BackendRoot $RelativePath
    $dir = Split-Path $fullPath -Parent
    if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }

    if ((Test-Path $fullPath) -and -not $Force) {
        Write-Host "  SKIP (exists): $RelativePath" -ForegroundColor Yellow
        $script:Skipped += $RelativePath
        return
    }

    Set-Content -Path $fullPath -Value $Content -NoNewline -Encoding utf8
    Write-Host "  CREATED: $RelativePath" -ForegroundColor Green
    $script:Created += $RelativePath
}

Write-Host "===================================================" -ForegroundColor Cyan
Write-Host " Building backend structure in .\$BackendRoot" -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan

New-ProjectFile -RelativePath '.env.example' -Content @'
# Copy this file to .env and fill in real values. Never commit .env itself.

# Get this from your Neon dashboard (Connection Details -> Pooled connection string)
DATABASE_URL=postgresql://user:password@your-neon-host/dbname?sslmode=require

# Generate a long random string, e.g.: python -c "import secrets; print(secrets.token_hex(32))"
SECRET_KEY=replace-with-a-long-random-string

ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60

# LLM provider key for the AI study assistant
LLM_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxx

# CORS - your Next.js frontend URL(s), comma-separated
FRONTEND_ORIGINS=http://localhost:3000
'@

New-ProjectFile -RelativePath 'README.md' -Content @'
# Backend - FastAPI + SQLAlchemy + Alembic + Neon Postgres

## First-time setup

1. Copy `.env.example` to `.env` and fill in real values:
   ```
   copy .env.example .env
   ```
   - `DATABASE_URL` - get this from your Neon dashboard (use the **pooled** connection string)
   - `SECRET_KEY` - generate with: `python -c "import secrets; print(secrets.token_hex(32))"`
   - `LLM_API_KEY` - your LLM provider's API key

2. Install dependencies (already done if you ran the setup script):
   ```
   pip install -r requirements.txt
   ```

3. Create the database tables by running the first migration:
   ```
   alembic revision --autogenerate -m "initial tables"
   alembic upgrade head
   ```
   This creates: `users`, `contests`, `quizzes`, `questions`, `submissions`, `chat_messages`.

4. Run the server:
   ```
   uvicorn app.main:app --reload
   ```
   API docs will be live at: http://localhost:8000/docs

## Project structure

```
backend/
├── app/
│   ├── main.py              # FastAPI app entry point, CORS, route registration
│   ├── core/
│   │   ├── config.py        # Settings loaded from .env
│   │   ├── database.py      # SQLAlchemy engine/session/Base
│   │   └── security.py      # Password hashing + JWT
│   ├── models/               # SQLAlchemy ORM models (one table each)
│   │   ├── user.py
│   │   ├── contest.py
│   │   ├── quiz.py           # Quiz + Question
│   │   ├── submission.py
│   │   └── chat.py           # AI assistant chat history
│   ├── schemas/               # Pydantic request/response models
│   └── api/routes/            # Actual endpoints, grouped by feature
│       ├── auth.py            # /auth/register, /auth/login
│       ├── quizzes.py         # /quizzes/daily, /quizzes/submit
│       ├── contests.py        # /contests
│       └── ai_assistant.py    # /ai/chat
├── alembic/                   # Migration scripts (auto-generated, do not hand-edit env.py lightly)
├── alembic.ini
└── requirements.txt
```

## Whenever you change a model (add a column, new table, etc.)

```
alembic revision --autogenerate -m "describe your change"
alembic upgrade head
```
Always review the auto-generated migration file in `alembic/versions/` before running `upgrade head` -
autogenerate is good but not perfect (e.g. it can miss some column type changes).

## Adding a new feature (e.g. "team contests")

1. Add/modify a model in `app/models/`
2. Add/modify the matching Pydantic schema in `app/schemas/`
3. Add the endpoint in `app/api/routes/`
4. Register the new router in `app/main.py` if it's a new file
5. Run the alembic migration steps above
'@

New-ProjectFile -RelativePath 'alembic.ini' -Content @'
[alembic]
script_location = alembic
prepend_sys_path = .
sqlalchemy.url = driver://user:pass@localhost/dbname

[post_write_hooks]

[loggers]
keys = root,sqlalchemy,alembic

[handlers]
keys = console

[formatters]
keys = generic

[logger_root]
level = WARN
handlers = console
qualname =

[logger_sqlalchemy]
level = WARN
handlers =
qualname = sqlalchemy.engine

[logger_alembic]
level = INFO
handlers =
qualname = alembic

[handler_console]
class = StreamHandler
args = (sys.stderr,)
level = NOTSET
formatter = generic

[formatter_generic]
format = %(levelname)-5.5s [%(name)s] %(message)s
datefmt = %H:%M:%S
'@

New-ProjectFile -RelativePath 'alembic/env.py' -Content @'
from logging.config import fileConfig

from alembic import context
from sqlalchemy import engine_from_config, pool

# Make sure our app package is importable
import sys
import os
sys.path.append(os.getcwd())

from app.core.config import settings
from app.core.database import Base
from app import models  # noqa: F401 - imports all models so Base knows about every table

config = context.config

# Override the URL from alembic.ini with the real one from our .env / settings
config.set_main_option("sqlalchemy.url", settings.DATABASE_URL)

if config.config_file_name is not None:
    fileConfig(config.config_file_name)

target_metadata = Base.metadata


def run_migrations_offline() -> None:
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )
    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )
    with connectable.connect() as connection:
        context.configure(connection=connection, target_metadata=target_metadata)
        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
'@

New-ProjectFile -RelativePath 'alembic/script.py.mako' -Content @'
"""${message}

Revision ID: ${up_revision}
Revises: ${down_revision | comma,n}
Create Date: ${create_date}

"""
from alembic import op
import sqlalchemy as sa
${imports if imports else ""}

# revision identifiers, used by Alembic.
revision = ${repr(up_revision)}
down_revision = ${repr(down_revision)}
branch_labels = ${repr(branch_labels)}
depends_on = ${repr(depends_on)}


def upgrade() -> None:
    ${upgrades if upgrades else "pass"}


def downgrade() -> None:
    ${downgrades if downgrades else "pass"}
'@

New-ProjectFile -RelativePath 'app/api/deps.py' -Content @'
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.security import decode_access_token
from app.models import User

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")


def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db),
) -> User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    payload = decode_access_token(token)
    if payload is None:
        raise credentials_exception

    user_id = payload.get("sub")
    if user_id is None:
        raise credentials_exception

    user = db.query(User).filter(User.id == int(user_id)).first()
    if user is None:
        raise credentials_exception
    return user
'@

New-ProjectFile -RelativePath 'app/api/routes/ai_assistant.py' -Content @'
import httpx
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.config import settings
from app.core.database import get_db
from app.api.deps import get_current_user
from app.models import User, ChatMessage
from app.schemas.contest import ChatRequest, ChatResponse

router = APIRouter(prefix="/ai", tags=["ai-assistant"])

# Example uses Anthropic's Messages API - swap the URL/payload shape if using
# a different provider (OpenAI, etc). Keep this call async so FastAPI can
# handle many concurrent chat sessions without blocking.
ANTHROPIC_URL = "https://api.anthropic.com/v1/messages"


@router.post("/chat", response_model=ChatResponse)
async def chat(
    chat_in: ChatRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    if not settings.LLM_API_KEY:
        raise HTTPException(status_code=500, detail="LLM_API_KEY is not configured")

    # Save the user's message
    db.add(ChatMessage(user_id=current_user.id, role="user", content=chat_in.message))
    db.commit()

    async with httpx.AsyncClient(timeout=30.0) as client:
        response = await client.post(
            ANTHROPIC_URL,
            headers={
                "x-api-key": settings.LLM_API_KEY,
                "anthropic-version": "2023-06-01",
                "content-type": "application/json",
            },
            json={
                "model": "claude-sonnet-4-6",
                "max_tokens": 1024,
                "system": "You are a helpful study assistant for college students. Be concise and clear.",
                "messages": [{"role": "user", "content": chat_in.message}],
            },
        )

    if response.status_code != 200:
        raise HTTPException(status_code=502, detail="AI provider request failed")

    data = response.json()
    reply_text = "".join(
        block.get("text", "") for block in data.get("content", []) if block.get("type") == "text"
    )

    # Save the assistant's reply
    db.add(ChatMessage(user_id=current_user.id, role="assistant", content=reply_text))
    db.commit()

    return ChatResponse(reply=reply_text)
'@

New-ProjectFile -RelativePath 'app/api/routes/auth.py' -Content @'
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.security import hash_password, verify_password, create_access_token
from app.models import User
from app.schemas.user import UserCreate, UserLogin, UserOut, Token

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/register", response_model=UserOut, status_code=status.HTTP_201_CREATED)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == user_in.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    user = User(
        email=user_in.email,
        username=user_in.username,
        full_name=user_in.full_name,
        hashed_password=hash_password(user_in.password),
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


@router.post("/login", response_model=Token)
def login(credentials: UserLogin, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == credentials.email).first()
    if not user or not verify_password(credentials.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Incorrect email or password")

    token = create_access_token(data={"sub": str(user.id)})
    return Token(access_token=token)
'@

New-ProjectFile -RelativePath 'app/api/routes/contests.py' -Content @'
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models import Contest
from app.schemas.contest import ContestOut

router = APIRouter(prefix="/contests", tags=["contests"])


@router.get("/", response_model=list[ContestOut])
def list_contests(db: Session = Depends(get_db)):
    return db.query(Contest).order_by(Contest.start_time.desc()).all()


@router.get("/{contest_id}", response_model=ContestOut)
def get_contest(contest_id: int, db: Session = Depends(get_db)):
    contest = db.query(Contest).filter(Contest.id == contest_id).first()
    if not contest:
        raise HTTPException(status_code=404, detail="Contest not found")
    return contest
'@

New-ProjectFile -RelativePath 'app/api/routes/quizzes.py' -Content @'
from datetime import date

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.api.deps import get_current_user
from app.models import User, Quiz, Question, Submission
from app.schemas.quiz import QuizOut, SubmissionCreate, SubmissionOut

router = APIRouter(prefix="/quizzes", tags=["quizzes"])


@router.get("/daily", response_model=QuizOut)
def get_daily_quiz(db: Session = Depends(get_db)):
    """Returns today's daily challenge quiz."""
    quiz = (
        db.query(Quiz)
        .filter(Quiz.is_daily == True, Quiz.date == date.today())  # noqa: E712
        .first()
    )
    if not quiz:
        raise HTTPException(status_code=404, detail="No daily quiz available for today")
    return quiz


@router.get("/{quiz_id}", response_model=QuizOut)
def get_quiz(quiz_id: int, db: Session = Depends(get_db)):
    quiz = db.query(Quiz).filter(Quiz.id == quiz_id).first()
    if not quiz:
        raise HTTPException(status_code=404, detail="Quiz not found")
    return quiz


@router.post("/submit", response_model=SubmissionOut)
def submit_quiz(
    submission_in: SubmissionCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    quiz = db.query(Quiz).filter(Quiz.id == submission_in.quiz_id).first()
    if not quiz:
        raise HTTPException(status_code=404, detail="Quiz not found")

    # Score the submission server-side - never trust a score sent from the client
    questions = {q.id: q for q in quiz.questions}
    score = 0
    for question_id, selected_index in submission_in.answers.items():
        question = questions.get(question_id)
        if question and selected_index == question.correct_option_index:
            score += question.points

    submission = Submission(
        user_id=current_user.id,
        quiz_id=quiz.id,
        answers=submission_in.answers,
        score=score,
    )
    db.add(submission)

    # Update user's running total + daily streak
    current_user.total_points += score
    if quiz.is_daily:
        current_user.streak_count += 1

    db.commit()
    db.refresh(submission)
    return submission
'@

New-ProjectFile -RelativePath 'app/core/config.py' -Content @'
"""
Central app configuration. Reads from environment variables / .env file.
"""
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    DATABASE_URL: str
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    LLM_API_KEY: str = ""
    FRONTEND_ORIGINS: str = "http://localhost:3000"

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

    @property
    def cors_origins(self) -> list[str]:
        return [origin.strip() for origin in self.FRONTEND_ORIGINS.split(",")]


settings = Settings()
'@

New-ProjectFile -RelativePath 'app/core/database.py' -Content @'
"""
SQLAlchemy engine, session factory, and declarative base.
Every model inherits from Base. Every request gets a DB session via get_db().
"""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

from app.core.config import settings

engine = create_engine(settings.DATABASE_URL, pool_pre_ping=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    """FastAPI dependency - yields a DB session and always closes it after the request."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
'@

New-ProjectFile -RelativePath 'app/core/security.py' -Content @'
"""
Password hashing (passlib) and JWT creation/verification (python-jose).
"""
from datetime import datetime, timedelta, timezone

from jose import JWTError, jwt
from passlib.context import CryptContext

from app.core.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def create_access_token(data: dict, expires_delta: timedelta | None = None) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + (
        expires_delta or timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)


def decode_access_token(token: str) -> dict | None:
    try:
        return jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
    except JWTError:
        return None
'@

New-ProjectFile -RelativePath 'app/main.py' -Content @'
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.api.routes import auth, quizzes, contests, ai_assistant

app = FastAPI(title="Campus Contests API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(quizzes.router)
app.include_router(contests.router)
app.include_router(ai_assistant.router)


@app.get("/")
def health_check():
    return {"status": "ok"}
'@

New-ProjectFile -RelativePath 'app/models/__init__.py' -Content @'
from app.models.user import User
from app.models.contest import Contest
from app.models.quiz import Quiz, Question
from app.models.submission import Submission
from app.models.chat import ChatMessage

__all__ = ["User", "Contest", "Quiz", "Question", "Submission", "ChatMessage"]
'@

New-ProjectFile -RelativePath 'app/models/chat.py' -Content @'
from datetime import datetime, timezone

from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from app.core.database import Base


class ChatMessage(Base):
    """One message in a user's conversation with the AI study assistant."""
    __tablename__ = "chat_messages"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    role = Column(String, nullable=False)     # "user" or "assistant"
    content = Column(Text, nullable=False)

    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    user = relationship("User", back_populates="chat_messages")
'@

New-ProjectFile -RelativePath 'app/models/contest.py' -Content @'
from datetime import datetime, timezone

from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.orm import relationship

from app.core.database import Base


class Contest(Base):
    """A scheduled contest window, e.g. 'Weekly Coding Contest #4'."""
    __tablename__ = "contests"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)

    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=False)

    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    quizzes = relationship("Quiz", back_populates="contest")
'@

New-ProjectFile -RelativePath 'app/models/quiz.py' -Content @'
from datetime import datetime, timezone

from sqlalchemy import Column, Integer, String, Text, DateTime, Date, Boolean, ForeignKey, JSON
from sqlalchemy.orm import relationship

from app.core.database import Base


class Quiz(Base):
    """
    A quiz can either be:
      - a standalone daily challenge (is_daily=True, date set, contest_id=None), or
      - part of a contest (contest_id set)
    """
    __tablename__ = "quizzes"

    id = Column(Integer, primary_key=True, index=True)
    contest_id = Column(Integer, ForeignKey("contests.id"), nullable=True)

    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)

    is_daily = Column(Boolean, default=False)
    date = Column(Date, nullable=True, index=True)  # which day this daily challenge belongs to

    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    contest = relationship("Contest", back_populates="quizzes")
    questions = relationship("Question", back_populates="quiz", cascade="all, delete-orphan")
    submissions = relationship("Submission", back_populates="quiz")


class Question(Base):
    __tablename__ = "questions"

    id = Column(Integer, primary_key=True, index=True)
    quiz_id = Column(Integer, ForeignKey("quizzes.id"), nullable=False)

    text = Column(Text, nullable=False)
    options = Column(JSON, nullable=False)        # e.g. ["Option A", "Option B", "Option C", "Option D"]
    correct_option_index = Column(Integer, nullable=False)
    points = Column(Integer, default=10)

    quiz = relationship("Quiz", back_populates="questions")
'@

New-ProjectFile -RelativePath 'app/models/submission.py' -Content @'
from datetime import datetime, timezone

from sqlalchemy import Column, Integer, DateTime, ForeignKey, JSON
from sqlalchemy.orm import relationship

from app.core.database import Base


class Submission(Base):
    """One user's attempt at one quiz, with their answers and resulting score."""
    __tablename__ = "submissions"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    quiz_id = Column(Integer, ForeignKey("quizzes.id"), nullable=False)

    answers = Column(JSON, nullable=False)   # e.g. {"question_id": selected_option_index, ...}
    score = Column(Integer, default=0)

    submitted_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    user = relationship("User", back_populates="submissions")
    quiz = relationship("Quiz", back_populates="submissions")
'@

New-ProjectFile -RelativePath 'app/models/user.py' -Content @'
from datetime import datetime, timezone

from sqlalchemy import Column, Integer, String, DateTime, Boolean
from sqlalchemy.orm import relationship

from app.core.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    username = Column(String, unique=True, index=True, nullable=False)
    full_name = Column(String, nullable=True)
    hashed_password = Column(String, nullable=False)

    is_active = Column(Boolean, default=True)
    streak_count = Column(Integer, default=0)          # daily-challenge streak
    total_points = Column(Integer, default=0)          # cumulative leaderboard score

    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

    submissions = relationship("Submission", back_populates="user")
    chat_messages = relationship("ChatMessage", back_populates="user")
'@

New-ProjectFile -RelativePath 'app/schemas/contest.py' -Content @'
from datetime import datetime

from pydantic import BaseModel


class ContestOut(BaseModel):
    id: int
    title: str
    description: str | None
    start_time: datetime
    end_time: datetime

    class Config:
        from_attributes = True


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str
'@

New-ProjectFile -RelativePath 'app/schemas/quiz.py' -Content @'
from datetime import date, datetime

from pydantic import BaseModel


class QuestionOut(BaseModel):
    """Question shown to the student - correct_option_index is hidden until after submission."""
    id: int
    text: str
    options: list[str]

    class Config:
        from_attributes = True


class QuizOut(BaseModel):
    id: int
    title: str
    description: str | None
    is_daily: bool
    date: date | None
    questions: list[QuestionOut]

    class Config:
        from_attributes = True


class SubmissionCreate(BaseModel):
    quiz_id: int
    answers: dict[int, int]   # {question_id: selected_option_index}


class SubmissionOut(BaseModel):
    id: int
    quiz_id: int
    score: int
    submitted_at: datetime

    class Config:
        from_attributes = True
'@

New-ProjectFile -RelativePath 'app/schemas/user.py' -Content @'
from datetime import datetime

from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    email: EmailStr
    username: str
    password: str
    full_name: str | None = None


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserOut(BaseModel):
    id: int
    email: EmailStr
    username: str
    full_name: str | None
    streak_count: int
    total_points: int
    created_at: datetime

    class Config:
        from_attributes = True


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
'@

# Empty package marker files
foreach ($relPath in @(
    'app/__init__.py',
    'app/api/__init__.py',
    'app/api/routes/__init__.py',
    'app/core/__init__.py',
    'app/schemas/__init__.py'
)) {
    New-ProjectFile -RelativePath $relPath -Content ""
}

Write-Host "`n---------------------------------------------------"
Write-Host "Created: $($Created.Count)   Skipped (already existed): $($Skipped.Count)" -ForegroundColor Cyan
if ($Skipped.Count -gt 0) {
    Write-Host "Tip: re-run with -Force to overwrite skipped files." -ForegroundColor Yellow
}
Write-Host "---------------------------------------------------"
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "  1. cd backend"
Write-Host "  2. copy .env.example .env   (then fill in real DATABASE_URL, SECRET_KEY, LLM_API_KEY)"
Write-Host "  3. pip install -r requirements.txt"
Write-Host '  4. alembic revision --autogenerate -m "initial tables"'
Write-Host "  5. alembic upgrade head"
Write-Host "  6. uvicorn app.main:app --reload"

Write-Host "`nPress Enter to close this window..."
Read-Host | Out-Null