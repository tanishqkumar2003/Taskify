const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        // completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async function(req, res) {
    const todos = await todo.find({});

    res.json({
        todos
    })

})


app.put('/completed', async function(req,res){
    const id = req.body.id;

    todo.findOneAndUpdate({ _id: id }, { completed: true }, { new: true })
    .then(res.json({
                msg:"Todo updated"
            }));
})


app.delete('/delete', function(req, res){
    const id = req.body.id;

    todo.findOneAndDelete({ _id: id })
    .then(res.json({
        msg:"Todo deleted"
    }))
})


app.listen(3000);