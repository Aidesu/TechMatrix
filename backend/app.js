import express from "express";
import { connectDB } from "./config/db.js";

const app = express();
const port = process.env.PORT;

connectDB();
app.use(express.json());

app.listen(port, () => console.log("Server start on port : " + port));
