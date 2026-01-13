CREATE TABLE review_analysis(
    id SERIAL PRIMARY KEY,
    review_id INTEGER NOT NULL,
    categories JSONB,
    sentiment_score DECIMAL(3,2),
    key_phrases JSONB,
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CHECK (sentiment_score >=0 AND sentiment_score <= 1),
    FOREIGN KEY (review_id) REFERENCES reviews(id)
);

CREATE INDEX idx_review_analysis_review_id ON review_analysis(review_id);