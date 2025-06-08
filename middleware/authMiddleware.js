const API_KEY = "your-secure-api-key";

const authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== API_KEY) {
    return res.status(403).json({ message: "Forbidden. Invalid API Key." });
  }
  next();
};

module.exports = { authenticateApiKey };
