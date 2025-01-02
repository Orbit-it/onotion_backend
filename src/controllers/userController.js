const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const poolAdmin = require("../config/dbAuth");

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// Inscription
const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await poolAdmin.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email,  hashedPassword]
    );

    res.status(201).json({ message: "User registered successfully", user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err.message });
  }
};

// Connexion
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await poolAdmin.query("SELECT * FROM users WHERE username = $1", [username]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token, role: user.role });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err.message });
  }
};

module.exports = { registerUser, loginUser };
