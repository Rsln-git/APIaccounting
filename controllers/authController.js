const { loginUser } = require("../methods/authMethod");
// const {
//   removeAccessToken,
//   removeRefreshToken,
//   isRefreshTokenActive,
//   addAccessToken,
// } = require("../services/sessionService");
const {
  verifyRefreshToken,
  generateAccessToken,
} = require("../services/jwtService");

const login = async (req, res) => {
  try {
    const result = await loginUser(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

const logout = (req, res) => {
  // const accessToken = req.token;
  // const { refreshToken } = req.body;

  // removeAccessToken(accessToken);
  // if (refreshToken) {
  //   removeRefreshToken(refreshToken);
  // }

  res.json({ message: "Logged out successfully" });
};

const refresh = (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken || !isRefreshTokenActive(refreshToken)) {
    return res.status(401).json({ message: "Refresh token required" });
  }

  try {
    const decoded = verifyRefreshToken(refreshToken);
    const newAccessToken = generateAccessToken({
      id: decoded.id,
      username: decoded.username,
      useremail: decoded.useremail,
      role: decoded.role,
    });

    // addAccessToken(newAccessToken);

    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired refresh token" });
  }
};

module.exports = { login, logout, refresh };
