# IntervAI: AI-Powered Automated Mock Interview Platform

![AI Interview Platform](https://img.shields.io/badge/Status-Active%20Development-brightgreen)
![Tech Stack](https://img.shields.io/badge/Python-3.10%2B-blue)
![Tech Stack](https://img.shields.io/badge/React-18%2B-61dafb)
![License](https://img.shields.io/badge/License-MIT-green)

An intelligent, end-to-end **automated interview platform** designed to simulate real-world technical and behavioral interviews. The platform leverages **Large Language Models (LLMs)** to generate dynamic, role-specific questions, analyze candidate responses in real-time, and provide granular, actionable performance analytics.

🎓 **Developed as a Final Year Capstone Project** for the Bachelor of Engineering (B.E.) in Computer Science and Engineering.

---

## 🌟 Core Features

✨ **Dynamic Question Generation**
- Generates tailored technical and situational questions based on candidate's uploaded resume
- Adapts to target job role and experience level
- Role-specific and experience-adaptive questioning

🧠 **Context-Aware Evaluation**
- Uses OpenAI API (GPT-4 / GPT-3.5-Turbo) to analyze responses in real-time
- Evaluates technical accuracy, communication clarity, and keyword relevance
- Maintains conversation memory for coherent interview flow

📊 **Comprehensive Feedback Dashboard**
- Quantitative scoring and performance metrics
- Structural feedback with actionable insights
- Recommended model answers for self-improvement
- Interactive data visualizations and charts

🔐 **Secure Data Management**
- Stores user profiles, interview session states, and historical performance metrics
- PostgreSQL relational database with strong data integrity
- Role-based authentication and secure token management

---

## 🏗️ System Architecture

The application follows a **decoupled client-server architecture** optimized for scalability and maintainability:

```
┌─────────────────────────────────────────────────────────────┐
│                    Client Layer (React SPA)                  │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  User Interface | Session Management | Analytics    │   │
│  └──────────────────────────────────────────────────────┘   │
└────────────┬──────────────────────────────────────────────┬─┘
             │        REST API (HTTP/HTTPS)                 │
             ▼                                               │
┌──────────────────────────────────────────────────────────┐  │
│             Application Layer (FastAPI)                   │  │
│  ┌──────────────────────────────────────────────────┐   │  │
│  │ Routing │ Validation │ Business Logic │ Security│   │  │
│  └──────────────────────────────────────────────────┘   │  │
└────────────┬──────────────────────────────────────────┬──┘
             │                                          │
    ┌────────▼──────────┐                   ┌──────────▼──────┐
    │  PostgreSQL DB    │                   │  OpenAI API     │
    │  (SQLAlchemy ORM) │                   │  (GPT-4/3.5)    │
    └───────────────────┘                   └─────────────────┘
```

### Architecture Components

1. **Client Layer (Frontend)**
   - Responsive Single Page Application (SPA) built with React
   - Manages user sessions and renders dynamic performance charts
   - Real-time interview interface with live feedback

2. **Application Layer (Backend)**
   - High-performance, asynchronous REST API built with FastAPI
   - Handles routing, Pydantic data validation, and secure business logic
   - Implements OAuth2 authentication with JWT tokens

3. **Data Layer (Database)**
   - PostgreSQL relational database for ACID compliance
   - SQLAlchemy ORM for strict data typing and query optimization
   - Alembic for schema versioning and migrations

4. **Intelligence Layer (AI)**
   - Direct integration with OpenAI APIs (GPT-4 / GPT-3.5-Turbo)
   - Processes dynamic prompts and maintains conversation memory
   - Real-time response evaluation and feedback generation

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React.js (v18+)** | UI framework for building interactive user interfaces |
| **Tailwind CSS** | Utility-first CSS framework for responsive design |
| **Chart.js / Recharts** | Data visualization for performance analytics |
| **Axios** | HTTP client for API integration |
| **React Router** | Client-side routing and navigation |

### Backend & Database
| Technology | Purpose |
|-----------|---------|
| **Python (v3.10+)** | Backend programming language |
| **FastAPI** | Modern, asynchronous web framework with automatic API documentation |
| **PostgreSQL** | Relational database for data persistence |
| **SQLAlchemy** | Python ORM for database abstraction |
| **Alembic** | Database schema migration tool |
| **Pydantic** | Data validation and serialization |

### AI & Machine Learning
| Technology | Purpose |
|-----------|---------|
| **OpenAI API** | GPT-4/GPT-3.5-Turbo for question generation and evaluation |
| **LangChain** | LLM orchestration and advanced prompt chaining (optional) |

### DevOps & Deployment
| Technology | Purpose |
|-----------|---------|
| **Docker** | Containerization for consistent environments |
| **docker-compose** | Multi-container orchestration |
| **Pytest** | Python unit testing framework |
| **Uvicorn** | ASGI server for FastAPI |

---

## 📋 Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js** (v16.x or higher) - [Download](https://nodejs.org/)
- **Python** (v3.10 or higher) - [Download](https://www.python.org/)
- **PostgreSQL** (v12 or higher) - [Download](https://www.postgresql.org/)
- **Git** - [Download](https://git-scm.com/)
- **OpenAI API Key** - [Get Key](https://platform.openai.com/api-keys)

Optional:
- **Docker** & **Docker Compose** - [Download](https://www.docker.com/)
- **Postman** - For API testing - [Download](https://www.postman.com/)

---

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/ai-interview-platform.git
cd ai-interview-platform
```

### Step 2: Database Setup (PostgreSQL)

Open your PostgreSQL terminal or pgAdmin and execute:

```sql
CREATE DATABASE intervai_db;
CREATE USER admin WITH ENCRYPTED PASSWORD 'yourpassword';
ALTER ROLE admin SET client_encoding TO 'utf8';
ALTER ROLE admin SET default_transaction_isolation TO 'read committed';
ALTER ROLE admin SET default_transaction_deferrable TO on;
ALTER ROLE admin SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE intervai_db TO admin;
```

Verify the connection:
```bash
psql -U admin -d intervai_db -h localhost
```

### Step 3: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create and activate virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env

# Update .env with your PostgreSQL credentials and OpenAI API key
# Edit .env file and set:
# DATABASE_URL=postgresql://admin:yourpassword@localhost:5432/intervai_db
# OPENAI_API_KEY=your_openai_api_key_here

# Run database migrations
alembic upgrade head

# Start the FastAPI server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

**API Documentation**: Visit `http://localhost:8000/docs` for interactive Swagger UI

### Step 4: Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with backend API URL
# REACT_APP_API_URL=http://localhost:8000

# Start development server
npm start
```

**Application**: Visit `http://localhost:3000` in your browser

---

## 📡 API Endpoints

### Authentication (`/api/auth`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new candidate account |
| POST | `/api/auth/login` | OAuth2 password bearer token generation |
| POST | `/api/auth/refresh` | Refresh expired JWT token |
| GET | `/api/auth/me` | Get current user profile |

**Example - Register:**
```bash
curl -X POST "http://localhost:8000/api/auth/register" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "candidate@example.com",
    "password": "securepassword123",
    "full_name": "John Doe"
  }'
```

### Interview Management (`/api/interview`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/interview/start` | Initialize new interview session |
| POST | `/api/interview/submit` | Submit candidate answer & get next question |
| GET | `/api/interview/current` | Get current interview state |
| GET | `/api/interview/report/{session_id}` | Fetch complete analytics report |
| GET | `/api/interview/history` | Get past interview sessions |
| DELETE | `/api/interview/{session_id}` | End interview session |

**Example - Start Interview:**
```bash
curl -X POST "http://localhost:8000/api/interview/start" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "job_role": "Senior Backend Engineer",
    "experience_level": "5-7 years",
    "resume": "base64_encoded_resume"
  }'
```

### User Profile (`/api/users`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/profile` | Get user profile |
| PUT | `/api/users/profile` | Update profile information |
| POST | `/api/users/upload-resume` | Upload resume file |

---

## 🔧 Project Structure

```
ai-interview-platform/
│
├── backend/
│   ├── alembic/                    # Database migrations
│   │   ├── versions/               # Migration scripts
│   │   ├── env.py
│   │   └── script.py.mako
│   │
│   ├── app/
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   ├── auth.py             # Authentication endpoints
│   │   │   ├── interview.py        # Interview endpoints
│   │   │   └── users.py            # User management endpoints
│   │   │
│   │   ├── core/
│   │   │   ├── __init__.py
│   │   │   ├── config.py           # Configuration & environment variables
│   │   │   ├── security.py         # JWT & OAuth2 implementation
│   │   │   └── database.py         # Database connection & session
│   │   │
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   ├── user.py             # User SQLAlchemy model
│   │   │   ├── interview.py        # Interview session model
│   │   │   └── feedback.py         # Feedback & analytics model
│   │   │
│   │   ├── schemas/
│   │   │   ├── __init__.py
│   │   │   ├── user.py             # User Pydantic schemas
│   │   │   ├── interview.py        # Interview request/response schemas
│   │   │   └── feedback.py         # Feedback schemas
│   │   │
│   │   ├── services/
│   │   │   ├── __init__.py
│   │   │   ├── openai_service.py   # OpenAI API integration
│   │   │   ├── interview_service.py# Interview business logic
│   │   │   └── user_service.py     # User management logic
│   │   │
│   │   └── main.py                 # FastAPI application entry point
│   │
│   ├── tests/
│   │   ├── __init__.py
│   │   ├── test_auth.py
│   │   ├── test_interview.py
│   │   └── conftest.py
│   │
│   ├── alembic.ini                 # Alembic configuration
│   ├── requirements.txt            # Python dependencies
│   ├── .env.example                # Environment variables template
│   └── README.md                   # Backend documentation
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   ├── logos/
│   │   │   └── styles/
│   │   │
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   ├── Interview/
│   │   │   │   ├── InterviewInterface.jsx
│   │   │   │   ├── QuestionDisplay.jsx
│   │   │   │   └── AnswerInput.jsx
│   │   │   ├── Dashboard/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   └── PerformanceChart.jsx
│   │   │   └── Common/
│   │   │       ├── Navbar.jsx
│   │   │       └── Loading.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── InterviewPage.jsx
│   │   │   └── ReportPage.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── api.js             # Axios API configuration
│   │   │   ├── authService.js     # Authentication API calls
│   │   │   └── interviewService.js# Interview API calls
│   │   │
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── App.css
│   │
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
├── docker-compose.yml              # Multi-container orchestration
├── .gitignore                      # Git ignore rules
├── LICENSE                         # MIT License
└── README.md                       # This file
```

---

## 🐳 Docker Deployment

Run the entire application stack using Docker Compose:

```bash
# Build and start all services
docker-compose up --build

# Stop services
docker-compose down

# View logs
docker-compose logs -f
```

**Services will be available at:**
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8000`
- API Docs: `http://localhost:8000/docs`
- PostgreSQL: `localhost:5432`

---

## 🧪 Testing

### Run Backend Tests

```bash
cd backend

# Run all tests
pytest

# Run with coverage
pytest --cov=app

# Run specific test file
pytest tests/test_auth.py -v
```

### Run Frontend Tests

```bash
cd frontend

# Run tests
npm test

# Run with coverage
npm test -- --coverage
```

---

## 🔑 Environment Variables

### Backend (.env)
```env
# Database
DATABASE_URL=postgresql://admin:password@localhost:5432/intervai_db
DATABASE_ECHO=False

# FastAPI
ENVIRONMENT=development
SECRET_KEY=your-super-secret-key-change-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# OpenAI
OPENAI_API_KEY=sk-your-api-key-here
OPENAI_MODEL=gpt-4

# CORS
CORS_ORIGINS=["http://localhost:3000", "http://localhost:8080"]
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_ENVIRONMENT=development
```

---

## 🚀 Deployment

### Deploy to Heroku

```bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Add PostgreSQL
heroku addons:create heroku-postgresql:hobby-dev

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

### Deploy to AWS

1. **Backend**: Deploy FastAPI to AWS Elastic Beanstalk or EC2
2. **Frontend**: Deploy React to AWS S3 + CloudFront
3. **Database**: Use Amazon RDS for PostgreSQL

### Deploy to Azure

1. Use Azure App Service for Backend
2. Use Azure Static Web Apps for Frontend
3. Use Azure Database for PostgreSQL

---

## 🔄 Future Enhancements

🎤 **Speech-to-Text Integration**
- Incorporate OpenAI's Whisper API for voice-based responses
- Natural speech input for candidates

⚡ **Celery & Redis Integration**
- Offload heavy LLM evaluation tasks to background workers
- Improve API response times using job queues

🐳 **Advanced Dockerization**
- Kubernetes deployment manifests
- Multi-environment configurations

🎥 **Video Recording**
- Record interview sessions with webcam
- Analyze non-verbal communication cues

📊 **Advanced Analytics**
- Comparative performance benchmarking
- Skill-based performance trending
- Interview difficulty calibration

🤖 **Prompt Engineering UI**
- Admin interface for custom prompt templates
- A/B testing framework for question generation

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a new branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow PEP 8 for Python code
- Use ESLint & Prettier for JavaScript
- Write tests for new features
- Update documentation accordingly

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 IntervAI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👨‍💻 Author

**Your Name**
- 🎓 B.E. Computer Science & Engineering Student
- 💼 LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [@yourprofile](https://github.com/yourprofile)
- 📧 Email: your.email@example.com

---

## 📞 Support & Contact

For questions, suggestions, or issues:
- **Create an Issue**: GitHub Issues
- **Email**: your.email@example.com
- **Discord/Slack**: Join our community

---

## 📚 Additional Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)
- [SQLAlchemy ORM](https://docs.sqlalchemy.org/en/20/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 🏆 Acknowledgments

Special thanks to:
- OpenAI for the GPT-4 and GPT-3.5 APIs
- FastAPI and Starlette communities
- React and Node.js ecosystems
- PostgreSQL community

---

**Made with ❤️ by IntervAI Team**

*Last Updated: May 31, 2024*
