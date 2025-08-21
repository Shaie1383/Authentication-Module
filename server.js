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
app.listen(5000, () => console.log("Server running on port 5000"));
