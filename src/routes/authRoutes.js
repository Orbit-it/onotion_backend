
// routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const AdminUser = require('../models/AdminUser');
const login = require('../controllers/userController')
const router = express.Router();

// Route pour l'inscription
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await AdminUser.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Enregistrement du nouvel utilisateur
    const newUser = await AdminUser.register({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    console.error('Error during registration:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/login', login.loginUser);

module.exports = router;

