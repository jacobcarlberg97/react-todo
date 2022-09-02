import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
    id: Number,
    todo: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const Todo = mongoose.model("Todo", TodoSchema)

export default Todo;