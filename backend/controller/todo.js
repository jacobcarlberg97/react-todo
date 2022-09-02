import Todo from "../models/todo.js";

export const getTodos = async (req, res) => {
    const todos = await Todo.find();
    console.log("hey", todos)
    if(todos.length) {
        return res.status(200).json(todos)
    } else {
        return res.json({
            status: 400,
            message: "No todos found"
        })
    }

}

export const updateTodo = async (req, res) => {
}

export const deleteTodo = async (req, res) => {
    try {
        const id = await req.body.todo._id
        await Todo.deleteOne({ _id: id})
        return res.json({
            status: 204,
            message: "deleted"
        })
    } catch (err) {
        return res.json({
            status: 400,
            message: err.message
        })
    }
}

export const createTodo = async (req, res) => {
  try {  
    const todo = await req.body?.todo;
    const newTodo = new Todo({
        todo
    });
    await newTodo.save(); 

    return res.status(200).json(newTodo);
 } catch (err) {
    return res.json({
        status: 400,
        message: err.message
    })
 }
}