# Quick Start Guide

## Overview

This is the **IntervAI - AI-Powered Automated Mock Interview Platform**. This guide will get you up and running in minutes.

## Prerequisites

- Python 3.10+
- Node.js 16+
- PostgreSQL 12+
- Git

## 5-Minute Setup

### 1. Clone & Navigate
```bash
git clone <your-repo-url>
cd ai-interview-platform
```

### 2. Setup Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env

# Edit .env and add:
# - DATABASE_URL
# - OPENAI_API_KEY
# - SECRET_KEY

alembic upgrade head
uvicorn app.main:app --reload
```

Backend runs at: **http://localhost:8000**
API Docs: **http://localhost:8000/docs**

### 3. Setup Frontend
```bash
cd ../frontend
npm install
cp .env.example .env

# Edit .env:
# REACT_APP_API_URL=http://localhost:8000

npm start
```

Frontend runs at: **http://localhost:3000**

## Using Docker

```bash
# Copy environment file
cp .env.example .env
# Edit .env with your API keys

# Start all services
docker-compose up --build

# Services will be available at:
# - Frontend: http://localhost:3000
# - Backend: http://localhost:8000
# - Database: localhost:5432
```

## Project Structure

```
📁 ai-interview-platform/
├── 📁 backend/          # FastAPI application
├── 📁 frontend/         # React application
├── 📄 docker-compose.yml
├── 📄 README.md
├── 📄 LICENSE
└── 📄 CONTRIBUTING.md
```

## Key Features

✨ **Dynamic Questions** - AI-generated role-specific questions
🧠 **Smart Evaluation** - Real-time response analysis
📊 **Analytics Dashboard** - Performance tracking & insights
🔐 **Secure** - JWT authentication & encrypted data

## API Quick Reference

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/auth/register` | POST | Create account |
| `/api/auth/login` | POST | Get access token |
| `/api/interview/start` | POST | Begin new interview |
| `/api/interview/submit` | POST | Submit answer |
| `/api/interview/report/{id}` | GET | Get results |

See [README.md](README.md) for full documentation.

## Troubleshooting

### Database Connection Error
```bash
# Check PostgreSQL is running
psql -U admin -d intervai_db -h localhost -c "SELECT 1"
```

### Port Already in Use
```bash
# Backend on different port
uvicorn app.main:app --port 8001

# Frontend on different port
PORT=3001 npm start
```

### API Documentation Not Loading
- Ensure backend is running
- Visit: http://localhost:8000/docs

## Next Steps

1. Read the full [README.md](README.md)
2. Check [CONTRIBUTING.md](CONTRIBUTING.md) to contribute
3. Review API docs at `/docs`
4. Start building features!

## Need Help?

- 📖 Full Documentation: [README.md](README.md)
- 🐛 Report Issues: GitHub Issues
- 💬 Ask Questions: GitHub Discussions
- 📧 Email: contact@intervai.dev

---

**Ready to interview? Let's go! 🚀**
