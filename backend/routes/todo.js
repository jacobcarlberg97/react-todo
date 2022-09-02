import express from "express";
import { getTodos, createTodo, deleteTodo, updateTodo} from "../controller/todo.js";
const router = express.Router();

router.get("/getTodos", getTodos)
router.post("/createTodo", createTodo)
router.delete("/deleteTodo", deleteTodo)
router.post("/updateTodo", updateTodo)

export default router