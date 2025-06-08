const { loginUser } = require("../methods/authMethod");

const login = async (req, res) => {
  console.log("Login request ", req.body);
  try {
    const result = await loginUser(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

module.exports = { login };
