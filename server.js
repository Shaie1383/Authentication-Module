// server.js
import express from "express";
import mysql from "mysql2";
import bcrypt from "bcrypt";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// ✅ REGISTER route
app.post("/api/register", async (req, res) => {
  const { fullname, email, password } = req.body;
  // save into database...
  res.json({ success: true, message: "User registered successfully" });
});

// ✅ LOGIN route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  // check DB and return response...
  res.json({ success: true, message: "Login successful" });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  });
