CREATE TABLE location_summary (
    id SERIAL PRIMARY KEY,
    location_id INTEGER NOT NULL,
    time_period_start DATE NOT NULL,
    time_period_end DATE NOT NULL,
    total_reviews INTEGER,
    average_rating DECIMAL(2, 1),
    average_sentiment DECIMAL(3, 2),
    percent_positive DECIMAL(5, 2),
    percent_negative DECIMAL(5, 2),
    category_counts JSONB,
    top_key_phrases JSONB,
    sentiment_change DECIMAL(4, 2),
    review_volume_change INTEGER,
    generated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CHECK (average_sentiment >= 0 AND average_sentiment <= 1),
    CHECK (average_rating >= 1 AND average_rating <= 5),
    CHECK (percent_positive >= 0 AND percent_positive <= 100),
    CHECK (percent_negative >= 0 AND percent_negative <= 100),
    FOREIGN KEY (location_id) REFERENCES locations(id),
    UNIQUE(location_id, time_period_start)
);

CREATE INDEX idx_location_summary_location_id ON location_summary(location_id);