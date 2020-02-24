const bcrypt = require('bcryptjs')
const router = require("express").Router();

const authRouter = require("../auth/auth-router.js");
const userRouter = require("../users/userRouter.js");

const Users = require("../users/users-model.js");
// const restricted = require("../auth/restricted-middleware.js");

router.use("/auth", authRouter);
router.use("/users", userRouter);

router.get("/", (req, res) => {
  res.send('<h1>Node Auth Project</h1><h2>Michael Phelps</h2>');
});

router.post("/register", (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 8);

  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      console.log(error.message);
      
      res.status(500).json(error);
    });
});

module.exports = router;