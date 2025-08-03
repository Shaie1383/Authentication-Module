# Auth Backend (Node.js + Express + MySQL)

A complete authentication backend built with Node.js, Express, and MySQL (hosted on Railway). Includes registration, login with JWT, password reset, and protected routes.

---

## 🔧 Features

- ✅ User Registration
- ✅ JWT-based Login
- ✅ Forgot & Reset Password
- ✅ Logout
- ✅ Protected Routes using Middleware
- ✅ Railway-hosted MySQL Database
- ✅ Thunder Client / Postman Tested

---

## 📁 Folder Structure

auth-backend/
├── controllers/
│ └── authController.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ └── db.js
├── routes/
│ └── authRoutes.js
├── .env
├── .gitignore
├── package.json
└── server.js
---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd auth-backend

### 2. Install Dependencies
npm install

## 🔐 Environment Variables
Create a .env file in the root directory:

DB_HOST=trolley.proxy.rlwy.net
DB_USER=root
DB_PASSWORD=yourRailwayPassword
DB_NAME=railway
DB_PORT=57639

JWT_SECRET=yourSecretKey


## 💾 Database Schema
Run the following SQL to create the users table in your Railway MySQL database:

sql

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  reset_token TEXT,
  reset_token_expires DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
## 📮 API Endpoints
🔹 Register
POST /api/auth/register

json
{
  "username": "testuser",
  "email": "test1@gmail.com",
  "password": "test_123"
}
🔹 Login
POST /api/auth/login

json

{
  "email": "test1@gmail.com",
  "password": "test_123"
}
Returns JWT token on success.

🔹 Forgot Password
POST /api/auth/forgot-password

json

{
  "email": "test1@gmail.com"
}
Returns reset link with token.

🔹 Reset Password
POST /api/auth/reset-password/:token

json

{
  "newPassword": "newpass123"
}
🔹 Logout
GET /api/auth/logout

Returns logout success message.

## ▶️ Run the Server

npm start
Your server will run at: http://localhost:5000

## 🧪 Testing
You can test the endpoints using:
Thunder Client


.gitignore
Make sure these are added in your.

gitignore file:
node_modules/
.env

## 📄 License
MIT © [ Mulla Shaista ]