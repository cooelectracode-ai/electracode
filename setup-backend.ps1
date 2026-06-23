<#
ElectraCode - Backend Scaffolding Script
Scaffolds FastAPI + SQLAlchemy + Alembic structure only

Run from: electracode/ (the root directory where frontend/ and backend/ already exist)
Usage: .\setup-backend.ps1
#>

$ErrorActionPreference = "Stop"
Write-Host "Scaffolding ElectraCode backend..." -ForegroundColor Cyan

Set-Location backend

# ===========================================================================
# PYTHON VIRTUAL ENVIRONMENT
# ===========================================================================
Write-Host "Creating Python virtual environment..." -ForegroundColor Yellow
python -m venv venv

# Activate venv
. .\venv\Scripts\Activate.ps1

Write-Host "Installing backend dependencies..." -ForegroundColor Yellow
python -m pip install --upgrade pip | Out-Null
pip install `
    fastapi `
    "uvicorn[standard]" `
    sqlalchemy `
    psycopg2-binary `
    alembic `
    pydantic `
    pydantic-settings `
    python-dotenv `
    "python-jose[cryptography]" `
    "passlib[bcrypt]" `
    python-multipart `
    pytz | Out-Null

pip freeze | Out-File -Encoding utf8 requirements.txt

Write-Host "Creating backend folder structure..." -ForegroundColor Yellow

# Domain-based structure (mirrors frontend lanes)
$beFolders = @(
    "app/api/auth",
    "app/api/profile",
    "app/api/practice",
    "app/api/tracker",
    "app/schemas",
    "app/services/auth",
    "app/services/profile",
    "app/services/practice",
    "app/services/tracker",
    "app/db/models",
    "app/core",
    "app/utils",
    "tests"
)

foreach ($f in $beFolders) { 
    New-Item -ItemType Directory -Force -Path $f | Out-Null 
}

# Create __init__.py files
$initDirs = @(
    "app",
    "app/api",
    "app/api/auth",
    "app/api/profile",
    "app/api/practice",
    "app/api/tracker",
    "app/schemas",
    "app/services",
    "app/services/auth",
    "app/services/profile",
    "app/services/practice",
    "app/services/tracker",
    "app/db",
    "app/db/models",
    "app/core",
    "app/utils",
    "tests"
)

foreach ($d in $initDirs) { 
    New-Item -ItemType File -Force -Path "$d/__init__.py" | Out-Null 
}

# ===========================================================================
# CORE CONFIG
# ===========================================================================
@"
from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    # Database
    DATABASE_URL: str = "postgresql://user:password@localhost/electracode"
    
    # JWT
    SECRET_KEY: str = "your-secret-key-change-me"
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    
    # API
    API_TITLE: str = "ElectraCode API"
    API_VERSION: str = "0.1.0"
    
    # CORS
    CORS_ORIGINS: list = ["http://localhost:3000"]

    class Config:
        env_file = ".env"

settings = Settings()
"@ | Out-File -Encoding utf8 app/core/config.py

@"
# Core utilities placeholder
"@ | Out-File -Encoding utf8 app/core/__init__.py

# ===========================================================================
# DATABASE
# ===========================================================================
@"
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from app.core.config import settings

# Create engine with connection pooling
engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,
    pool_size=10,
    max_overflow=20,
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    """Dependency for FastAPI to get DB session."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
"@ | Out-File -Encoding utf8 app/db/database.py

@"
# Database models
"@ | Out-File -Encoding utf8 app/db/__init__.py

# ===========================================================================
# SCHEMAS (Pydantic models for request/response)
# ===========================================================================
foreach ($domain in @("auth", "profile", "practice", "tracker")) {
    @"
from pydantic import BaseModel
from typing import Optional

# Domain: $domain
# Add your Pydantic request/response models here
"@ | Out-File -Encoding utf8 "app/schemas/$domain.py"
}

@"
# Schemas package
"@ | Out-File -Encoding utf8 app/schemas/__init__.py

# ===========================================================================
# MODELS (SQLAlchemy ORM models per domain)
# ===========================================================================
foreach ($domain in @("auth", "profile", "practice", "tracker")) {
    @"
from sqlalchemy import Column, Integer, String, DateTime, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from app.db.database import Base
from datetime import datetime

# Domain: $domain
# Add your SQLAlchemy models here
"@ | Out-File -Encoding utf8 "app/db/models/$domain.py"
}

@"
# Models package
"@ | Out-File -Encoding utf8 app/db/models/__init__.py

# ===========================================================================
# SERVICES (Business logic per domain)
# ===========================================================================
foreach ($domain in @("auth", "profile", "practice", "tracker")) {
    @"
from sqlalchemy.orm import Session

# Domain: $domain
# Add your service/business logic here

class ${domain}Service:
    @staticmethod
    def example():
        pass
"@ | Out-File -Encoding utf8 "app/services/$domain/service.py"
    
    @"
# ${domain} services
"@ | Out-File -Encoding utf8 "app/services/$domain/__init__.py"
}

@"
# Services package
"@ | Out-File -Encoding utf8 app/services/__init__.py

# ===========================================================================
# API ROUTES (FastAPI routers per domain)
# ===========================================================================
foreach ($domain in @("auth", "profile", "practice", "tracker")) {
    @"
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import get_db

router = APIRouter()

# Domain: $domain
# Add your ${domain} endpoints here

@router.get("/$domain/health")
def ${domain}_health():
    return {"message": "${domain} service is healthy"}
"@ | Out-File -Encoding utf8 "app/api/$domain/routes.py"
    
    @"
# ${domain} routes
"@ | Out-File -Encoding utf8 "app/api/$domain/__init__.py"
}

@"
# API routes package
"@ | Out-File -Encoding utf8 app/api/__init__.py

# ===========================================================================
# MAIN APP
# ===========================================================================
@"
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.auth.routes import router as auth_router
from app.api.profile.routes import router as profile_router
from app.api.practice.routes import router as practice_router
from app.api.tracker.routes import router as tracker_router

app = FastAPI(
    title=settings.API_TITLE,
    version=settings.API_VERSION,
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include domain routers
app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(profile_router, prefix="/profile", tags=["profile"])
app.include_router(practice_router, prefix="/practice", tags=["practice"])
app.include_router(tracker_router, prefix="/tracker", tags=["tracker"])

@app.get("/")
def root():
    return {"message": "ElectraCode API running"}

@app.get("/health")
def health():
    return {"status": "healthy"}
"@ | Out-File -Encoding utf8 app/main.py

@"
# Main package
"@ | Out-File -Encoding utf8 app/__init__.py

# ===========================================================================
# ENVIRONMENT FILES
# ===========================================================================
@"
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/electracode

# JWT
SECRET_KEY=your-super-secret-key-change-this-in-production
JWT_ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60

# API
API_TITLE=ElectraCode API
API_VERSION=0.1.0

# CORS
CORS_ORIGINS=http://localhost:3000
"@ | Out-File -Encoding utf8 .env.example

@"
# Copy .env.example to .env and fill in your values:
# cp .env.example .env
"@ | Out-File -Encoding utf8 .env.local

# ===========================================================================
# ALEMBIC (Database migrations)
# ===========================================================================
Write-Host "Initializing Alembic..." -ForegroundColor Yellow
alembic init alembic

# Update alembic.ini to point to settings
(Get-Content alembic.ini) -replace 'sqlalchemy.url = driver://user:password@localhost/dbname', 'sqlalchemy.url = driver://user:password@localhost/dbname' | Set-Content alembic.ini

# Create a basic migration template note
@"
# Alembic migrations
# 
# To create a migration after modifying models:
#   alembic revision --autogenerate -m "add user table"
#
# To apply migrations:
#   alembic upgrade head
#
# To downgrade:
#   alembic downgrade -1
"@ | Out-File -Encoding utf8 alembic/README_MIGRATIONS.md

# ===========================================================================
# TEST STRUCTURE
# ===========================================================================
@"
# Test suite placeholder
"@ | Out-File -Encoding utf8 tests/__init__.py

@"
# E2E tests
"@ | Out-File -Encoding utf8 tests/test_api.py

@"
# Unit tests for services
"@ | Out-File -Encoding utf8 tests/test_services.py

# ===========================================================================
# GITIGNORE (for backend only, if needed)
# ===========================================================================
@"
venv/
__pycache__/
*.pyc
.pytest_cache/
*.egg-info/
dist/
build/
.env
.env.*
!.env.example
.DS_Store
"@ | Out-File -Encoding utf8 .gitignore

# ===========================================================================
# DONE
# ===========================================================================
deactivate

Set-Location ..

Write-Host "`nBackend scaffolding complete!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "  1. Fill in backend/.env with your Neon DATABASE_URL and SECRET_KEY"
Write-Host "  2. Activate venv: backend\venv\Scripts\Activate.ps1"
Write-Host "  3. Configure alembic.ini to use SQLAlchemy's create_engine from settings"
Write-Host "  4. Create initial migration: alembic revision --autogenerate -m 'initial'"
Write-Host "  5. Apply migrations: alembic upgrade head"
Write-Host "  6. Run server: uvicorn app.main:app --reload"
Write-Host "`nServer will be available at: http://localhost:8000"
Write-Host "Swagger docs at: http://localhost:8000/docs"