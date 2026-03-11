CREATE TABLE IF NOT EXISTS locations(
    id SERIAL PRIMARY KEY,
    google_place_id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    is_favorite BOOLEAN DEFAULT false,
    last_fetched TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS reviews(
    id SERIAL PRIMARY KEY,
    location_id INTEGER REFERENCES locations(id),
    author VARCHAR(255),
    rating DECIMAL(2,1),
    review TEXT, 
    published_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS location_analysis(
    id SERIAL PRIMARY KEY,
    location_id INTEGER REFERENCES locations(id),
    speed_sentiment TEXT,
    quality_sentiment TEXT,
    service_sentiment TEXT,
    summary_text TEXT,  
    analyzed_at TIMESTAMP
);

 