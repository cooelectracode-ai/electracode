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