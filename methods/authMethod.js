const { getUserByUsername } = require("../requestsDb/userDb");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../services/jwtService");
// const {
//   addAccessToken,
//   addRefreshToken,
// } = require("../services/sessionService");

const loginUser = async ({ useremail, password }) => {
  const user = await getUserByUsername(useremail);

  if (!user || user.password !== password) {
    throw new Error("Invalid credentials");
  }

  const payload = {
    id: user.id,
    username: user.username,
    usersurname: user.usersurname,
    useremail: user.useremail,
    role: user.role,
  };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  // addAccessToken(accessToken);
  // addRefreshToken(refreshToken);

  return { accessToken, refreshToken };
};

module.exports = { loginUser };
