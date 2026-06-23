from datetime import date, datetime

from pydantic import BaseModel


class QuestionOut(BaseModel):
    """Question shown to the student - correct_option_index is hidden until after submission."""
    id: int
    text: str
    options: list[str]

    class Config:
        from_attributes = True


class QuizOut(BaseModel):
    id: int
    title: str
    description: str | None
    is_daily: bool
    date: date | None
    questions: list[QuestionOut]

    class Config:
        from_attributes = True


class SubmissionCreate(BaseModel):
    quiz_id: int
    answers: dict[int, int]   # {question_id: selected_option_index}


class SubmissionOut(BaseModel):
    id: int
    quiz_id: int
    score: int
    submitted_at: datetime

    class Config:
        from_attributes = True