const { getUserByUsername } = require("../requestsDb/userDb");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../services/jwtService");
const {
  addAccessToken,
  addRefreshToken,
} = require("../services/sessionService");

const loginUser = async ({ username, password }) => {
  const user = await getUserByUsername(username);

  if (!user || user.password !== password) {
    throw new Error("Invalid credentials");
  }

  const payload = { id: user.id, username: user.username };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  addAccessToken(accessToken);
  addRefreshToken(refreshToken);

  return { accessToken, refreshToken };
};

module.exports = { loginUser };
