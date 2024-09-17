const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)

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