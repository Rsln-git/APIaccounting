const users = [
  { id: 1, username: "admin", password: "admin123" },
  { id: 2, username: "user", password: "user123" },
];

const getUserByUsername = async (username) => {
  return users.find((user) => user.username === username);
};

module.exports = { getUserByUsername };
