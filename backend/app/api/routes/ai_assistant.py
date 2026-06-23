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