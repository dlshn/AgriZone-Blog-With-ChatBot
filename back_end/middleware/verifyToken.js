const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(403).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.jwt_secret);
    req.user = verified; // attach user to request 
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

module.exports = verifyToken; 
