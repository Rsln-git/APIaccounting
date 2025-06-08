const { getUserByUsername } = require("../requestsDb/userDb");

const loginUser = async ({ useremail, password }) => {
  console.log("Login request method ", useremail, password);
  const user = await getUserByUsername(useremail);
  console.log("Login request method response ", user);

  if (!user.useremail || user.password !== password) {
    throw new Error("Invalid credentials");
  }

  return { message: "Login successful", user };
};

module.exports = { loginUser };
