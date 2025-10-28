import express from "express";
import { connectDB } from "./config/db.js";
import usersRoute from "./routes/usersRoute.js";
import cpuRoutes from "./routes/cpuRoutes.js";
import gpuRoutes from "./routes/gpuRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT;

await connectDB();
app.use(express.json());
app.use(cors());

app.use("/users", cors(), usersRoute);
app.use("/cpu", cors(), cpuRoutes);
app.use("/gpu", cors(), gpuRoutes);
app.use("/ai", cors(), aiRoutes);

app.listen(port, () => console.log("Server start on port : " + port));
