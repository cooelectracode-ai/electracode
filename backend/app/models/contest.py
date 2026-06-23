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