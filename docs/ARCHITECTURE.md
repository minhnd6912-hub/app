# Healthcare App - Architecture

## Kiến trúc Hệ thống

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                    CLIENT (React.js)                    │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐  │
│  │  Appointment │  │  Customer    │  │  Payment     │  │
│  │  Management  │  │  Management  │  │  Management  │  │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘  │
└─────────────────────────────┬──────────────────────────────────────────┘
                         │ HTTP/REST API
┌─────────────────────────────┴──────────────────────────────────────────┐
│                  API SERVER (Node.js)                    │
│                                                         │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │            Express.js Routes                     │  │
│  │  - Authentication                                │  │
│  │  - Customers CRUD                                │  │
│  │  - Appointments CRUD                             │  │
│  │  - Payments Management                           │  │
│  │  - Staff Management                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                         │                               │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │         Business Logic & Services               │   │
│  └──────────────────────────────────────────────────────────────┘   │
└─────────────────────────────┬──────────────────────────────────────────┘
                         │ SQL Queries
┌─────────────────────────────┴──────────────────────────────────────────┐
│              DATABASE (MySQL)                            │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐   │
│  │  customers  │  │ appointments │  │  payments   │   │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘   │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐   │
│  │    users    │  │   doctors   │  │  schedules  │   │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

## Folder Structure

### Backend (`/backend`)
```
backend/
├── src/
│   ├── index.js                 # Entry point
│   ├── config/
│   │   └── database.js          # Database connection
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── customer.routes.js
│   │   ├── appointment.routes.js
│   │   ├── payment.routes.js
│   │   └── staff.routes.js
│   ├── controllers/             # Business logic
│   ├── models/                  # Database queries
│   ├── middlewares/             # Auth, validation, etc
│   ├── utils/                   # Helper functions
│   └── validators/              # Input validation
├── docs/
│   └── DATABASE_SCHEMA.sql
├── .env.example
└── package.json
```

### Frontend (`/frontend`)
```
frontend/
├── src/
│   ├── index.js
│   ├── App.js
│   ├── pages/                   # Main pages
│   │   ├── Home.js
│   │   ├── Appointments/
│   │   ├── Customers/
│   │   └── Payments/
│   ├── components/              # Reusable components
│   ├── services/                # API calls
│   │   └── api.js
│   ├── hooks/                   # Custom hooks
│   ├── utils/                   # Helper functions
│   ├── styles/                  # Global CSS
│   └── context/                 # State management
├── public/
└── package.json
```

## Database Schema
Xem chi tiết tại: `backend/docs/DATABASE_SCHEMA.sql`

## API Endpoints
Xem chi tiết tại: `backend/docs/API.md`
