const mongoose = require('mongoose');

// mongodb+srv://tanishq:admin@cluster0.p4vtfdh.mongodb.net/todos
mongoose.connect("mongodb+srv://tanishq:admin@cluster0.p4vtfdh.mongodb.net/todo")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}