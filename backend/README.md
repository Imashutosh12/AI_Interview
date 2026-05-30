# IntervAI Backend - FastAPI Documentation

## Overview

The backend is built with **FastAPI**, a modern, asynchronous Python web framework optimized for high performance and automatic API documentation. It handles all business logic, database operations, and OpenAI API integrations.

## Project Structure

```
backend/
├── alembic/                    # Database migrations
│   ├── versions/               # Migration scripts
│   ├── env.py                  # Migration environment config
│   └── script.py.mako          # Migration script template
├── app/
│   ├── api/
│   │   ├── __init__.py
│   │   ├── auth.py             # /api/auth endpoints
│   │   ├── interview.py        # /api/interview endpoints
│   │   └── users.py            # /api/users endpoints
│   ├── core/
│   │   ├── __init__.py
│   │   ├── config.py           # Configuration management
│   │   ├── security.py         # JWT & password security
│   │   └── database.py         # Database session & connection
│   ├── models/
│   │   ├── __init__.py
│   │   ├── user.py             # User SQLAlchemy model
│   │   ├── interview.py        # Interview session model
│   │   └── feedback.py         # Feedback model
│   ├── schemas/
│   │   ├── __init__.py
│   │   ├── user.py             # User request/response schemas
│   │   ├── interview.py        # Interview schemas
│   │   └── feedback.py         # Feedback schemas
│   ├── services/
│   │   ├── __init__.py
│   │   ├── openai_service.py   # OpenAI API calls
│   │   ├── interview_service.py# Interview logic
│   │   └── user_service.py     # User management
│   └── main.py                 # FastAPI app entry point
├── tests/
│   ├── __init__.py
│   ├── test_auth.py
│   ├── test_interview.py
│   └── conftest.py
├── alembic.ini                 # Alembic configuration
├── requirements.txt            # Python dependencies
├── .env.example                # Environment template
└── README.md                   # This file
```

## Installation

### Prerequisites
- Python 3.10+
- PostgreSQL 12+
- Virtual environment tool (venv or conda)

### Setup Steps

1. **Create Virtual Environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   ```

4. **Setup Database**
   ```bash
   alembic upgrade head
   ```

5. **Run Development Server**
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

## API Documentation

FastAPI automatically generates interactive API documentation. Once running, visit:

- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

## Database Management

### Create Migration
```bash
alembic revision --autogenerate -m "Description of changes"
```

### Apply Migration
```bash
alembic upgrade head
```

### Downgrade Migration
```bash
alembic downgrade -1
```

## Testing

### Run All Tests
```bash
pytest
```

### Run with Coverage
```bash
pytest --cov=app --cov-report=html
```

### Run Specific Test
```bash
pytest tests/test_auth.py -v
```

## Key Features

### Authentication
- JWT-based token authentication
- OAuth2 password bearer scheme
- Secure password hashing with bcrypt
- Token refresh mechanism

### Interview Management
- Session initialization with context
- Dynamic question generation via OpenAI
- Real-time response evaluation
- Comprehensive feedback generation

### Database
- SQLAlchemy ORM for type safety
- Alembic for schema versioning
- PostgreSQL for data persistence
- Transaction management

## Environment Variables

See `.env.example` for all available configuration options.

Critical variables:
- `DATABASE_URL`: PostgreSQL connection string
- `OPENAI_API_KEY`: OpenAI API key for GPT models
- `SECRET_KEY`: For JWT token signing
- `ALGORITHM`: Token signing algorithm (HS256)
- `ACCESS_TOKEN_EXPIRE_MINUTES`: Token expiration time

## Development Guidelines

### Code Style
- Follow PEP 8
- Use type hints
- Use `black` for formatting

### Pre-commit Checks
```bash
black app/
isort app/
flake8 app/
mypy app/
```

## Performance Optimization

- Asynchronous endpoints for non-blocking I/O
- Connection pooling for database
- Response caching where applicable
- Lazy loading of heavy services

## Deployment

### Docker
```bash
docker build -t intervai-backend .
docker run -p 8000:8000 intervai-backend
```

### Production Checklist
- [ ] Set `ENVIRONMENT=production`
- [ ] Use strong `SECRET_KEY`
- [ ] Enable HTTPS
- [ ] Configure CORS properly
- [ ] Set up database backups
- [ ] Monitor error logs
- [ ] Use reverse proxy (Nginx)

## Troubleshooting

### Database Connection Issues
```bash
# Test PostgreSQL connection
psql -U admin -d intervai_db -h localhost -c "SELECT 1"
```

### OpenAI API Issues
- Verify API key is valid
- Check API rate limits
- Review request format

### Migration Issues
```bash
# Reset migrations (development only)
alembic downgrade base
alembic upgrade head
```

## Support & Documentation

- FastAPI Docs: https://fastapi.tiangolo.com/
- SQLAlchemy Docs: https://docs.sqlalchemy.org/
- Alembic Docs: https://alembic.sqlalchemy.org/
- OpenAI API: https://platform.openai.com/docs/
