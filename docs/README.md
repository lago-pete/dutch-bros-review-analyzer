# Dutch Bros Multi-Location Review Analysis Platform

An AI-powered analytics platform that aggregates and analyzes customer reviews across multiple Dutch Bros Coffee locations, providing actionable insights for regional managers and operators.

##Project Status: In Active Development

## Overview

This platform addresses the challenge of monitoring customer feedback across 500+ Dutch Bros locations by:
- Automatically fetching reviews from Google Places API
- Using AI to categorize and analyze sentiment
- Generating weekly summary reports with trend analysis
- Providing filterable dashboards for detailed investigation

**Business Value:** Enables operators to identify issues early, compare location performance, and make data-driven operational decisions.

---

## Tech Stack

### **Backend**
- **FastAPI** (Python) - API framework
- **PostgreSQL** - Relational database
- **SQLAlchemy** - ORM
- **OpenAI API** - Review analysis
- **Google Places API** - Review data source

### **Frontend**
- **Next.js 14** (React) - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Leaflet** - Map visualization

### **Infrastructure (AWS)**
- **ECS with Fargate** - Containerized backend hosting
- **Lambda** - Scheduled data processing jobs
- **RDS PostgreSQL** - Managed database
- **S3 + CloudFront** - Frontend hosting and CDN
- **EventBridge** - Job scheduling
- **Docker** - Containerization

---

## Architecture
```
┌─────────────┐
│   Next.js   │  ←── User Interface
│  (S3+CDN)   │
└──────┬──────┘
       │ HTTPS
       ▼
┌─────────────┐
│   FastAPI   │  ←── REST API
│    (ECS)    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ PostgreSQL  │  ←── Data Storage
│    (RDS)    │
└─────────────┘
       ▲
       │
┌──────┴──────┐
│   Lambda    │  ←── Scheduled Jobs
│  (Nightly)  │
└─────────────┘
```

---

## Features

### Core Functionality
- [x] Multi-location review aggregation
- [x] AI-powered sentiment analysis and categorization
- [x] Weekly automated summary generation
- [x] Historical trend tracking
- [x] Manual refresh with rate limiting
- [x] Custom date range analysis
- [x] CSV export

### Dashboard Views
- [x] Location comparison
- [x] Sentiment trends over time
- [x] Category breakdown visualization
- [x] Filterable review details
- [x] Key phrase extraction

---


##  Getting Started

### Prerequisites
- Python 3.11+
- Node.js 18+
- Docker Desktop
- AWS Account (free tier eligible)


## Project Goals

This project demonstrates:
1. **Full-stack development** - End-to-end application architecture
2. **AI/ML integration** - Practical LLM API usage
3. **Cloud infrastructure** - Production-ready AWS deployment
4. **Data engineering** - ETL pipelines and batch processing
5. **Business thinking** - Solving real operational challenges

---
##  Author

**Peter Lagonegro**
- GitHub: [lago_pete](https://github.com/lago-pete/dutch-bros-review-analyzer)
- LinkedIn: [Your Profile](www.linkedin.com/in/peter-lagonegro-2728b0293)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgments

Built as a portfolio project to demonstrate modern full-stack development practices with AI integration and cloud infrastructure.