const db = require('../data/dbconfig');

module.exports = {
  addUser,
  login,
  showUsers,
  getUserByID
}

function getUserByID(id) {
  return db('users')
    .where({id})
    .first()
}

function addUser(user) {
  return db('users')
    .insert(user, "id")
    .then(ids => {
      const [id] = ids
      return getUserByID(id)
    })
}

function showUsers(){
  return db('users')
    .select('id', 'username', 'password');
}





