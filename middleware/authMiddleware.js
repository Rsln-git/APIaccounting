const jwt = require("jsonwebtoken");
const { isAccessTokenActive } = require("../services/sessionService");
const SECRET_KEY = "your-secret-key";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token || !isAccessTokenActive(token)) {
    return res.sendStatus(403);
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    req.token = token;
    next();
  });
};

module.exports = { authenticateToken };
