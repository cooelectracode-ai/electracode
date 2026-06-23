# ElectraCode

## Tech Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS

### Backend

* FastAPI
* SQLAlchemy
* Alembic
* Pydantic

### Database

* Neon PostgreSQL

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

# Initial Setup

## Clone Repository

```bash
git clone <repository-url>
cd electracode
```

---

## Backend Setup

Navigate to backend:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

### Windows

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## Environment Variables

Copy:

```text
.env.example
```

to:

```text
.env
```

### Required Values

* `DATABASE_URL` → Neon PostgreSQL pooled connection string
* `SECRET_KEY` → Generate using:

```bash
python -c "import secrets; print(secrets.token_hex(32))"
```

* `LLM_API_KEY` → AI provider API key

Example:

```env
DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require
SECRET_KEY=replace-with-random-secret
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
LLM_API_KEY=
FRONTEND_ORIGINS=http://localhost:3000
```

---

## Frontend Setup

Navigate to frontend:

```bash
cd ../frontend
```

Install dependencies:

```bash
npm install
```

---

# Running the Project

## Start Backend

```bash
cd backend

uvicorn app.main:app --reload
```

Backend:

```text
http://localhost:8000
```

API Docs:

```text
http://localhost:8000/docs
```

---

## Start Frontend

```bash
cd frontend

npm run dev
```

Frontend:

```text
http://localhost:3000
```

---

# Database Migrations

Create migration:

```bash
alembic revision --autogenerate -m "describe change"
```

Apply migration:

```bash
alembic upgrade head
```

Always review generated migration files before applying them.

---

# Project Structure

```text
electracode/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   ├── database.py
│   │   │   └── security.py
│   │   │
│   │   ├── models/
│   │   │   ├── user.py
│   │   │   ├── contest.py
│   │   │   ├── quiz.py
│   │   │   ├── submission.py
│   │   │   └── chat.py
│   │   │
│   │   ├── schemas/
│   │   │
│   │   └── api/routes/
│   │       ├── auth.py
│   │       ├── quizzes.py
│   │       ├── contests.py
│   │       └── ai_assistant.py
│   │
│   ├── alembic/
│   ├── alembic.ini
│   ├── requirements.txt
│   ├── .env.example
│   └── README.md
│
├── docs/
│
└── README.md
```

---

# Development Workflow

When adding a new feature:

1. Create/update SQLAlchemy model in `app/models/`
2. Create/update corresponding Pydantic schema in `app/schemas/`
3. Add API endpoints in `app/api/routes/`
4. Register new routers in `app/main.py`
5. Generate and apply Alembic migration
6. Test endpoints using Swagger Docs (`/docs`)
7. Connect frontend components to the new API

---

# Do Not Commit

```text
.env
venv/
node_modules/
.next/
__pycache__/
```

Use `.env.example` as the template for environment variables.

---

# Current Status

✅ Next.js configured

✅ FastAPI configured

✅ SQLAlchemy configured

✅ Alembic configured

✅ Pydantic configured

⏳ Neon PostgreSQL connection pending

⏳ Authentication implementation pending

⏳ Database schema finalization pending

Vercel DB Manager Tool
https://vercel-db-manager.vercel.app/

Connection String: postgresql://neondb_owner:npg_HTBtNj3Ai7Pf@ep-silent-term-asnp7mph-pooler.c-4.eu-central-1.aws.neon.tech/neondb?channel_binding=require&sslmode=require
