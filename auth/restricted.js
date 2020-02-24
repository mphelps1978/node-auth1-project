const bcrypt = require('bcryptjs')
const Users = require('../users/users-model')



module.exports = (req, res, next) => {
  let { username, password } = req.headers;

  if(username && password){

      Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          next()

        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(({name, message, stack}) => {
        console.log(name, message, stack);

        res.status(500).json({error: 'There was an error'});
      });
    }else {
      res.status(400).json({message: 'You must be logged in to do that'})

    }

}