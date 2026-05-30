# Contributing to IntervAI

We welcome contributions to the IntervAI platform! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful, inclusive, and professional in all interactions.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a new branch** for your feature: `git checkout -b feature/amazing-feature`
4. **Make your changes** and commit them: `git commit -m 'Add amazing feature'`
5. **Push to your fork**: `git push origin feature/amazing-feature`
6. **Create a Pull Request** on GitHub

## Development Setup

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your configuration
alembic upgrade head
uvicorn app.main:app --reload
```

### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with backend API URL
npm start
```

## Code Style Guidelines

### Python (Backend)
- Follow PEP 8 style guide
- Use type hints for all functions
- Write docstrings for modules, classes, and functions
- Use `black` for code formatting
- Use `isort` for import organization

```bash
# Format code
black app/
isort app/
```

### JavaScript/React (Frontend)
- Use ES6+ syntax
- Use functional components with hooks
- Write meaningful component names
- Use ESLint and Prettier

```bash
# Format code
npm run format
npm run lint
```

## Testing

### Backend Tests
```bash
pytest tests/ -v
pytest tests/ --cov=app
```

### Frontend Tests
```bash
npm test
npm test -- --coverage
```

All new features must include tests.

## Commit Messages

Use clear, descriptive commit messages:

- ✨ `feat:` New feature
- 🐛 `fix:` Bug fix
- 📚 `docs:` Documentation changes
- 🎨 `style:` Code style changes (formatting, etc.)
- ♻️  `refactor:` Code refactoring
- ✅ `test:` Adding or updating tests
- 🚀 `perf:` Performance improvements

Example:
```
feat: add speech-to-text support for interview answers

- Integrate OpenAI Whisper API
- Add audio recording UI component
- Implement speech-to-text conversion
- Add fallback for text input
```

## Pull Request Process

1. **Update README.md** with any new features or changes to setup
2. **Add/update tests** for new functionality
3. **Ensure all tests pass**: `pytest` and `npm test`
4. **Update documentation** as needed
5. **Check for code style issues**: `black`, `isort`, `npm run lint`
6. **Write a clear PR description** explaining:
   - What changes were made
   - Why the changes were made
   - Any relevant issues or PRs

## Reporting Bugs

When reporting bugs, please include:

- **Description**: Clear description of the bug
- **Steps to Reproduce**: How to reproduce the issue
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: If applicable
- **Environment**: OS, Python/Node version, etc.

## Feature Requests

When suggesting features, please include:

- **Description**: Clear description of the feature
- **Use Case**: Why this feature would be useful
- **Example**: How the feature would work
- **Alternative Solutions**: Any alternatives considered

## Areas for Contribution

- 🎯 **Backend**: New API endpoints, database optimizations, AI integrations
- 🎨 **Frontend**: UI improvements, new pages, accessibility enhancements
- 📚 **Documentation**: README updates, API docs, tutorials
- 🧪 **Testing**: Increase test coverage, add integration tests
- 🐛 **Bug Fixes**: Fix reported issues
- 📦 **Deployment**: Docker, CI/CD improvements

## Questions?

Feel free to open an issue or reach out to the maintainers. We're here to help!

---

Thank you for contributing to IntervAI! 🚀
