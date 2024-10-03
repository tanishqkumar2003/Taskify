const express = require('express');
const userRouter = require('./user');
const todoRouter = require('./todo')

const router = express.Router();

router.use("/user", userRouter)
router.use("/todo", todoRouter)

module.exports = router;