# IntervAI Frontend - React Application

## Overview

The frontend is a modern, responsive Single Page Application (SPA) built with **React 18** that provides an intuitive user interface for the AI Interview Platform. It includes real-time interview sessions, performance dashboards, and comprehensive analytics.

## Project Structure

```
frontend/
├── public/
│   ├── index.html              # HTML entry point
│   └── favicon.ico             # App icon
├── src/
│   ├── assets/
│   │   ├── images/             # UI images
│   │   ├── logos/              # Brand logos
│   │   └── styles/             # Global CSS
│   ├── components/
│   │   ├── Auth/
│   │   │   ├── Login.jsx       # Login component
│   │   │   └── Register.jsx    # Registration component
│   │   ├── Interview/
│   │   │   ├── InterviewInterface.jsx  # Main interview UI
│   │   │   ├── QuestionDisplay.jsx     # Question rendering
│   │   │   └── AnswerInput.jsx         # Answer input component
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.jsx   # Main dashboard
│   │   │   └── PerformanceChart.jsx    # Analytics charts
│   │   └── Common/
│   │       ├── Navbar.jsx      # Navigation bar
│   │       ├── Loading.jsx     # Loading spinner
│   │       └── Footer.jsx      # Footer component
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing page
│   │   ├── DashboardPage.jsx   # Dashboard page
│   │   ├── InterviewPage.jsx   # Interview page
│   │   └── ReportPage.jsx      # Results report page
│   ├── services/
│   │   ├── api.js              # Axios configuration
│   │   ├── authService.js      # Auth API calls
│   │   └── interviewService.js # Interview API calls
│   ├── App.jsx                 # Root component
│   ├── index.js                # React entry point
│   └── App.css                 # Global styles
├── package.json
├── .env.example                # Environment template
└── README.md                   # This file
```

## Installation

### Prerequisites
- Node.js 16.x or higher
- npm 8.x or yarn 3.x
- Modern web browser

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   ```bash
   cp .env.example .env
   # Edit .env with backend API URL
   ```

3. **Start Development Server**
   ```bash
   npm start
   ```

   Application opens at `http://localhost:3000`

## Available Scripts

### Development
```bash
npm start          # Start development server
npm run dev        # Alternative dev command
```

### Production
```bash
npm run build      # Create production build
npm run serve      # Serve production build locally
```

### Testing & Quality
```bash
npm test           # Run tests
npm test --coverage    # Run with coverage
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

## Key Features

### Authentication System
- User registration and login
- JWT token management
- Protected routes
- Persistent session

### Interview Interface
- Real-time question display
- Answer input with validation
- Progress tracking
- Session timer

### Dashboard
- Interview history
- Performance metrics
- Score tracking
- Skill-based analytics
- Data visualizations

### Responsive Design
- Mobile-friendly
- Tablet optimization
- Desktop experience
- Cross-browser support

## Technologies Used

| Package | Purpose |
|---------|---------|
| React 18 | UI framework |
| React Router | Client-side routing |
| Axios | HTTP client |
| Tailwind CSS | Styling |
| Recharts | Data visualization |
| React Query | Data fetching |
| Redux/Context | State management |

## API Integration

### Service Configuration

File: `src/services/api.js`

```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

## Component Hierarchy

```
App
├── Router
│   ├── HomePage
│   ├── Auth
│   │   ├── Login
│   │   └── Register
│   ├── ProtectedRoute
│   │   ├── DashboardPage
│   │   │   └── Dashboard
│   │   ├── InterviewPage
│   │   │   └── InterviewInterface
│   │   └── ReportPage
│   │       └── PerformanceChart
│   └── NotFound
└── Footer
```

## State Management

### Context API (Local State)
- Authentication context
- User profile context
- Interview state

### Local Storage
- Access tokens
- User preferences
- Session data

## Styling

### Tailwind CSS
- Utility-first CSS framework
- Responsive design
- Custom theme configuration

### CSS Modules (Optional)
- Component-specific styles
- Namespace isolation
- Better maintainability

## Performance Optimization

- Code splitting with React.lazy
- Memoization with React.memo
- Image optimization
- Bundle size monitoring

## Development Workflow

### Component Creation Template

```jsx
import React from 'react';
import styles from './ComponentName.module.css';

const ComponentName = ({ prop1, prop2 }) => {
  const [state, setState] = React.useState(null);

  React.useEffect(() => {
    // Component logic
  }, []);

  return (
    <div className={styles.container}>
      {/* Component JSX */}
    </div>
  );
};

export default ComponentName;
```

## Testing

### Unit Tests
```bash
npm test -- ComponentName.test.js
```

### Integration Tests
```bash
npm test -- integration
```

### E2E Tests
```bash
npm run test:e2e
```

## Build & Deployment

### Production Build
```bash
npm run build
# Creates optimized build in /build directory
```

### Environment-Specific Builds
```bash
# Staging
REACT_APP_ENVIRONMENT=staging npm run build

# Production
REACT_APP_ENVIRONMENT=production npm run build
```

### Deployment Checklist
- [ ] Run `npm run build`
- [ ] Test build locally with `npm run serve`
- [ ] Run tests and linting
- [ ] Update environment variables
- [ ] Review build size
- [ ] Test all features
- [ ] Deploy to hosting

## Troubleshooting

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
# Change port in .env or use:
PORT=3001 npm start
```

### CORS Issues
- Verify backend CORS configuration
- Check API URL in .env
- Review browser console for errors

### Build Fails
```bash
npm cache clean --force
npm install
npm run build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Resources

- React Documentation: https://react.dev/
- React Router: https://reactrouter.com/
- Tailwind CSS: https://tailwindcss.com/
- Axios: https://axios-http.com/
- Recharts: https://recharts.org/

## Performance Metrics

Target Web Vitals:
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

Monitor with Chrome DevTools or Lighthouse.
