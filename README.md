# MERN Auth App

A full-stack authentication system using the MERN stack (MongoDB, Express.js, React, Node.js). This app allows users to sign up, log in, and view a protected home page with personalized greetings. It uses JWT for authentication and middleware for route protection.

## 🔧 Features

- User Signup & Login
- JWT-based Authentication
- Protected Routes
- Middleware Validation
- React Frontend with Form Validation
- Express + MongoDB Backend

## 🚀 Tech Stack

- **Frontend:** React, Tailwind CSS (if used)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Auth:** JSON Web Tokens (JWT)

## 📁 Project Structure

client/ → React frontend
server/ → Node.js + Express backend
server/models/ → Mongoose models
server/routes/ → API routes
server/middleware/ → Auth middleware

## 🛠️ Setup Instructions

```
1. **Clone the repo**
git clone https://github.com/your-username/mern-auth-app.git

2. Install server dependencies
cd server
npm install

3. Create a .env file in server/
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

4. Start the server
npm run dev

5. Install client dependencies
cd ../client
npm install

6. Start the React app
npm run dev

```
- Built with the MERN Stack (MongoDB, Express.js, React, Node.js) for full-stack functionality.

- Implemented real-time login/signup forms with React and backend API integration.

- Secured routes using JWT (JSON Web Token) in Express.js middleware to prevent unauthorized access.

- Performed form validation on the backend using Express and Mongoose.

- Stored JWT in localStorage to maintain user sessions and reduce unnecessary server calls.

