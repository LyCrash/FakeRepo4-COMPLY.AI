const users = [];

function saveUser(user) {
  users.push(user);
}

module.exports = { users, saveUser };
