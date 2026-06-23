from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models import Contest
from app.schemas.contest import ContestOut

router = APIRouter(prefix="/contests", tags=["contests"])


@router.get("/", response_model=list[ContestOut])
def list_contests(db: Session = Depends(get_db)):
    return db.query(Contest).order_by(Contest.start_time.desc()).all()


@router.get("/{contest_id}", response_model=ContestOut)
def get_contest(contest_id: int, db: Session = Depends(get_db)):
    contest = db.query(Contest).filter(Contest.id == contest_id).first()
    if not contest:
        raise HTTPException(status_code=404, detail="Contest not found")
    return contest