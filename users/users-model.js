const db = require('../data/dbconfig');

module.exports = {
add,
find,
findByID,
findBy
}


function findBy(filter) {
  return db("accounts")
    .select("id", "username", "password")
    .where(filter);
}

function findByID(id) {
  return db('accounts')
    .where({id})
    .first()
}

function add(user) {
  return db('accounts')
    .insert(user, "id")
    .then(ids => {
      const [id] = ids
      return findByID(id)
    })
}

function find(){
  return db('accounts')
    .select('id', 'username', 'password');
}





