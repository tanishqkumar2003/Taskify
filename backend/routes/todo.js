const express = require("express");
const { createTodo, updateTodo } = require("../types");
const { todo, User } = require("../db");
const { authMiddleware } = require("../middleware");
const router = express.Router();

router.post("/create", authMiddleware, async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  const user = await User.findOne({ _id: req.userId });
  if (!user) {
    return res.json({
      message: "User not found",
    });
  }

  await todo.create({
    userId: req.userId,
    title: createPayload.title,
    description: createPayload.description,
    priority: createPayload.priority,
    dueDate: createPayload.dueDate,
  });

  res.json({
    msg: "Todo created",
  });
});

router.get("/get", authMiddleware, async function (req, res) {
  const todos = await todo.find({userId: req.userId});

  res.json({
    todos,
  });
});

router.put("/completed", authMiddleware, async function (req, res) {
  const id = req.body._id;

  const targetTodo = await todo.findOne({ _id: id });
  if (!targetTodo) {
    return res.json({
      message: "Todo not found",
    });
  }

  todo.findOneAndUpdate({ _id: id }, { completed: true }, { new: true }).then(
    res.json({
      msg: "Todo updated",
    })
  );
});


router.delete("/delete/:id", authMiddleware, function (req, res) {
    const id = req.params.id;
  
    todo.findOneAndDelete({ _id: id }).then(() =>
      res.json({
        msg: "Todo deleted",
      })
    );
  });
  

module.exports = router;
