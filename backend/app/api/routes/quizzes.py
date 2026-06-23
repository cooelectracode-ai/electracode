from datetime import date

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.api.deps import get_current_user
from app.models import User, Quiz, Question, Submission
from app.schemas.quiz import QuizOut, SubmissionCreate, SubmissionOut

router = APIRouter(prefix="/quizzes", tags=["quizzes"])


@router.get("/daily", response_model=QuizOut)
def get_daily_quiz(db: Session = Depends(get_db)):
    """Returns today's daily challenge quiz."""
    quiz = (
        db.query(Quiz)
        .filter(Quiz.is_daily == True, Quiz.date == date.today())  # noqa: E712
        .first()
    )
    if not quiz:
        raise HTTPException(status_code=404, detail="No daily quiz available for today")
    return quiz


@router.get("/{quiz_id}", response_model=QuizOut)
def get_quiz(quiz_id: int, db: Session = Depends(get_db)):
    quiz = db.query(Quiz).filter(Quiz.id == quiz_id).first()
    if not quiz:
        raise HTTPException(status_code=404, detail="Quiz not found")
    return quiz


@router.post("/submit", response_model=SubmissionOut)
def submit_quiz(
    submission_in: SubmissionCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    quiz = db.query(Quiz).filter(Quiz.id == submission_in.quiz_id).first()
    if not quiz:
        raise HTTPException(status_code=404, detail="Quiz not found")

    # Score the submission server-side - never trust a score sent from the client
    questions = {q.id: q for q in quiz.questions}
    score = 0
    for question_id, selected_index in submission_in.answers.items():
        question = questions.get(question_id)
        if question and selected_index == question.correct_option_index:
            score += question.points

    submission = Submission(
        user_id=current_user.id,
        quiz_id=quiz.id,
        answers=submission_in.answers,
        score=score,
    )
    db.add(submission)

    # Update user's running total + daily streak
    current_user.total_points += score
    if quiz.is_daily:
        current_user.streak_count += 1

    db.commit()
    db.refresh(submission)
    return submission