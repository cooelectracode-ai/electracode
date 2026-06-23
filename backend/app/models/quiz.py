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