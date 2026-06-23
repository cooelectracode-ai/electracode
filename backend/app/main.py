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