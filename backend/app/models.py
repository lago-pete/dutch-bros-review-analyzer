from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime, Date, Numeric, ForeignKey
from sqlalchemy.dialects.postgresql import JSONB
from datetime import datetime
from .database import Base

class Location(Base):
    __tablename__ = "locations"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), nullable=False)
    address = Column(String(255))
    google_place_id = Column(Text, unique=True, nullable=False)
    last_manual_refresh_at = Column(DateTime)
    created_at = Column(DateTime, default=datetime.utcnow)

class Review(Base):
    __tablename__ = "reviews"
    
    id = Column(Integer, primary_key=True, index=True)
    location_id = Column(Integer, ForeignKey("locations.id"), nullable=False)
    platform = Column(String(50), nullable=False)
    external_review_id = Column(Text, nullable=False)
    review_text = Column(Text)
    rating = Column(Numeric(2, 1))
    reviewer_name = Column(String(100))
    review_date = Column(Date, nullable=False)  
    fetched_at = Column(DateTime, default=datetime.utcnow)
    is_analyzed = Column(Boolean, default=False)

class ReviewAnalysis(Base):
    __tablename__ = "review_analysis"
    
    id = Column(Integer, primary_key=True, index=True)
    review_id = Column(Integer, ForeignKey("reviews.id"), nullable=False)
    categories = Column(JSONB)
    sentiment_score = Column(Numeric(3, 2))
    key_phrases = Column(JSONB)
    analyzed_at = Column(DateTime, default=datetime.utcnow)

class LocationSummary(Base):
    __tablename__ = "location_summary"
    
    id = Column(Integer, primary_key=True, index=True)
    location_id = Column(Integer, ForeignKey("locations.id"), nullable=False)
    time_period_start = Column(Date, nullable=False)
    time_period_end = Column(Date, nullable=False)
    total_reviews = Column(Integer)
    average_rating = Column(Numeric(2, 1))
    average_sentiment = Column(Numeric(3, 2))
    percent_positive = Column(Numeric(5, 2))
    percent_negative = Column(Numeric(5, 2))
    category_counts = Column(JSONB)
    top_key_phrases = Column(JSONB)
    sentiment_change = Column(Numeric(4, 2))
    review_volume_change = Column(Integer)
    generated_at = Column(DateTime, default=datetime.utcnow)