import express from "express"
import mongoose from "mongoose";
import todoRoutes from "./routes/todo.js";
import cors from "cors"
const app = express();
const port = 5000;
const CONNECTION_URL = "mongodb+srv://admin:xAmfyN60yMAyYNRu@cluster0.uwi2jpd.mongodb.net/test"

mongoose.connect(CONNECTION_URL).then(() => {
    app.listen(port, () => {
        console.log(`server is running on port ${port}`)
    })
}).catch((error) => {
    console.log(error.message);
})

app.use(cors())
app.use(express.json())

app.use("/api/todo", todoRoutes);