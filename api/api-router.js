const bcrypt = require("bcryptjs");
const router = require("express").Router();

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
// const restricted = require("../auth/restricted-middleware.js");

router.use("/auth", authRouter);
router.use("/users", usersRouter);

router.get("/", (req, res) => {
  res.send('<h1>Node Auth Project</h1><h2>Michael Phelps</h2>');
});

module.exports = router;