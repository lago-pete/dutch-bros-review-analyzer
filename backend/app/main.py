from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from . import models, database


app = FastAPI(
    title = "Dutch Bros Analyzer", 
    description="API for analyzing customer reviews across multiple locations",
    version="1.0.0")


@app.get("/")
def root():
    return [{"Message" :"This is the Home Page"}]


@app.get("/api/locations")
def get_locations(db: Session = Depends(database.get_db)):
    locations = db.query(models.Location).all()
    return locations 




