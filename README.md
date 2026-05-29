# MERN Stack Job Portal

Welcome to the Job Portal project! This project is a job portal application built using the MERN stack (MongoDB, Express, React, Node.js).

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Links](#project-links)

## Project Overview

This Job Portal application allows users to search and apply for jobs, as well as for employers to post job openings. The application is built using the MERN stack, which provides a robust and efficient development environment for full-stack applications.

## Features

- User authentication and authorization
- Job listing and search functionality
- Job application process
- Employer dashboard for managing job postings
- Responsive design for mobile and desktop

## Project Structure

JOB-PORTAL/
│
├── Backend/
│   │
│   ├── controllers/
│   │   ├── application.controller.js
│   │   ├── company.controller.js
│   │   ├── job.controller.js
│   │   └── user.controller.js
│   │
│   ├── middleware/
│   │   ├── isAuthenticated.js
│   │   └── multer.js
│   │
│   ├── models/
│   │   ├── application.model.js
│   │   ├── company.model.js
│   │   ├── job.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── application.route.js
│   │   ├── company.route.js
│   │   ├── job.route.js
│   │   └── user.route.js
│   │
│   ├── utils/
│   │   ├── cloud.js
│   │   ├── datauri.js
│   │   └── db.js
│   │
│   ├── .env
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
│
├── Frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── admincomponent/
│   │   │   ├── authentication/
│   │   │   ├── components_lite/
│   │   │   └── ui/
│   │   │
│   │   ├── hooks/
│   │   │
│   │   ├── redux/
│   │   │   ├── authSlice.js
│   │   │   ├── jobSlice.js
│   │   │   ├── applicationSlice.js
│   │   │   ├── companyslice.js
│   │   │   └── store.js
│   │   │
│   │   ├── utils/
│   │   ├── lib/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── README.md
└── package-lock.json

## Installation

To run this project locally, follow these steps:

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd ./backend
   ```

2. Install the required dependencies:
   ```bash
   npm i
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

   You should see the following messages:
   ```
   "Your server is running on a port"
   "MongoDB connected..."
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ./backend/frontend
   ```

2. Install the required dependencies:
   ```bash
   npm i
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

### Create .env File

```env
PORT=8000

MONGO_URI=your_mongodb_connection

SECRET_KEY=your_jwt_secret

CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

FRONTEND_URL=http://localhost:5173
```

### Clone Repository

```bash
git clone https://github.com/tirumanimukesh-dev/Job_Portal
cd job-portal
```

## Usage

Once both the backend and frontend servers are running, you can access the application on your local machine. The default development server is typically available at `http://localhost:3000`.

## Project Links

| Resource | Link |
|-----------|------|
| GitHub Repository | https://github.com/tirumanimukesh-dev/Job_Portal |
| Live Demo | https://job-portal-9tfe.onrender.com |