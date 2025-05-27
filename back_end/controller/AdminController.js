const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (email !==process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
    return res.status(400).json({ message: 'Invalid credentials' }); 
  }

  const token = jwt.sign({ adminEmail: email }, process.env.jwt_secret, { expiresIn: '1d' });
  res.json({ token, message: 'Login successful' });
};
 