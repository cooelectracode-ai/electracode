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
â”œâ”€â”€ app/
â”‚   â”œâ”€â”€ main.py              # FastAPI app entry point, CORS, route registration
â”‚   â”œâ”€â”€ core/
â”‚   â”‚   â”œâ”€â”€ config.py        # Settings loaded from .env
â”‚   â”‚   â”œâ”€â”€ database.py      # SQLAlchemy engine/session/Base
â”‚   â”‚   â””â”€â”€ security.py      # Password hashing + JWT
â”‚   â”œâ”€â”€ models/               # SQLAlchemy ORM models (one table each)
â”‚   â”‚   â”œâ”€â”€ user.py
â”‚   â”‚   â”œâ”€â”€ contest.py
â”‚   â”‚   â”œâ”€â”€ quiz.py           # Quiz + Question
â”‚   â”‚   â”œâ”€â”€ submission.py
â”‚   â”‚   â””â”€â”€ chat.py           # AI assistant chat history
â”‚   â”œâ”€â”€ schemas/               # Pydantic request/response models
â”‚   â””â”€â”€ api/routes/            # Actual endpoints, grouped by feature
â”‚       â”œâ”€â”€ auth.py            # /auth/register, /auth/login
â”‚       â”œâ”€â”€ quizzes.py         # /quizzes/daily, /quizzes/submit
â”‚       â”œâ”€â”€ contests.py        # /contests
â”‚       â””â”€â”€ ai_assistant.py    # /ai/chat
â”œâ”€â”€ alembic/                   # Migration scripts (auto-generated, do not hand-edit env.py lightly)
â”œâ”€â”€ alembic.ini
â””â”€â”€ requirements.txt
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