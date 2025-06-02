const jwt = require("jsonwebtoken");

const SECRET_KEY = "your-secret-key";
const REFRESH_SECRET = "your-refresh-secret-key";

const generateAccessToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

const generateRefreshToken = (payload) => {
  return jwt.sign(payload, REFRESH_SECRET, { expiresIn: "7d" });
};

const verifyAccessToken = (token) => jwt.verify(token, SECRET_KEY);
const verifyRefreshToken = (token) => jwt.verify(token, REFRESH_SECRET);

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
