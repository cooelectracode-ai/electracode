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