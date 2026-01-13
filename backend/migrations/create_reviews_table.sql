CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    location_id INTEGER NOT NULL,
    platform VARCHAR(50) NOT NULL,
    external_review_id TEXT NOT NULL,
    review_text TEXT,
    rating DECIMAL(2, 1),
    reviewer_name VARCHAR(100),
    review_date DATE NOT NULL,
    fetched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_analyzed BOOLEAN DEFAULT false,
    FOREIGN KEY (location_id) REFERENCES locations(id),
    UNIQUE(platform, external_review_id)
);

CREATE INDEX idx_reviews_location_id ON reviews(location_id);