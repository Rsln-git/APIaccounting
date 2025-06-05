const users = [
  {
    id: 1,
    username: "Stanislav",
    usersurname: "Bobik",
    useremail: "admin@admin.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: 2,
    username: "Mykola",
    usersurname: "Tuzik",
    useremail: "user@user.com",
    password: "user123",
    role: "user",
  },
  {
    id: 3,
    username: "Igor",
    usersurname: "Tarzan",
    useremail: "moder@moder.com",
    password: "moder123",
    role: "moderator",
  },
];

const getUserByUsername = async (useremail) => {
  return users.find((user) => user.useremail === useremail);
};

module.exports = { getUserByUsername };
