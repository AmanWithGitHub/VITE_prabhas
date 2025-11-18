const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

// ------------------- DATABASE SETUP -------------------
const db = new sqlite3.Database("./database.db");

// Create users table + seed users
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT,
      role TEXT
    )`
  );

  const hashedPass = bcrypt.hashSync("pass123", 10);

  db.run(
    `INSERT OR IGNORE INTO users (email, password, role) VALUES 
      ('viewer@vite.co.in', ?, 'viewer'),
      ('analyst@vite.co.in', ?, 'analyst')`,
    [hashedPass, hashedPass]
  );
});

// JWT secret
const SECRET = "secret123";

// ------------------- LOGIN API -------------------
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email = ?", [email], (err, user) => {
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, role: user.role }, SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, role: user.role });
  });
});

// ------------------- SAMPLE DATA APIs -------------------
app.get("/summary", (req, res) => {
  res.json({
    totalSales: 42000,
    totalOrders: 150,
    inventoryCount: 78,
  });
});

app.get("/chart-data", (req, res) => {
  res.json({
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    sales: [5000, 7000, 6500, 8000, 9000, 11000],
  });
});

app.get("/table-data", (req, res) => {
  res.json([
    {
      date: "2025-06-01",
      product: "Laptop",
      category: "Electronics",
      amount: 55000,
    },
    {
      date: "2025-06-02",
      product: "Mouse",
      category: "Electronics",
      amount: 800,
    },
    { date: "2025-06-03", product: "Shoes", category: "Fashion", amount: 2200 },
    {
      date: "2025-06-04",
      product: "Keyboard",
      category: "Electronics",
      amount: 1500,
    },
    {
      date: "2025-06-05",
      product: "T-Shirt",
      category: "Fashion",
      amount: 600,
    },
  ]);
});

// ------------------- START SERVER -------------------
app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
