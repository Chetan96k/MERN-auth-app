# 🧠 Task Buddy – Backend API

This is the backend for **Task Buddy**, a task management application built using **Node.js**, **Express**, and **MongoDB**. It supports user authentication using JWT and provides protected endpoints.

---

## 🚀 Features

- ✅ User Registration (`/signup`)
- ✅ User Login (`/login`)
- ✅ Protected Profile Route (`/profile`)
- ✅ JWT Token Authentication
- ✅ Password Hashing with Bcrypt
- ✅ MongoDB with Mongoose ODM

---

## 📁 Folder Structure

task-buddy-backend/
├── controllers/
│ ├── authController.js
│ └── userController.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ └── User.js
├── routes/
│ ├── authRoutes.js
│ └── userRoutes.js
├── .env
├── server.js
└── package.json

---

## ⚙️ Tech Stack

- **Node.js** + **Express**
- **MongoDB** + **Mongoose**
- **JWT** for authentication
- **Bcrypt.js** for password hashing
- **dotenv** for environment variables
- **cors** for handling cross-origin requests

---

## 🧪 API Endpoints

### 📝 Register – `POST /api/auth/signup`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}

Response:
{
  "id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "..."
}

🔑 Login – POST /api/auth/login

Request Body:
{
  "email": "john@example.com",
  "password": "123456"
}

Response:
{
  "id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "token": "..."
}

👤 Get Profile – GET /api/user/profile (🔒 Protected)
Headers:

Authorization: Bearer <your_token_here>
Response:

{
  "_id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "...",
  "updatedAt": "..."
}

🔐 Authentication Flow
User signs up or logs in
Backend returns a JWT token
Client sends token in Authorization header
Middleware verifies token and gives access to protected routes


📌 Notes
Passwords are stored securely using bcrypt
All protected routes require a valid JWT token
MongoDB connection is handled using Mongoose