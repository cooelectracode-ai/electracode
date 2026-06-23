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