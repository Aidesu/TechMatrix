import { Router } from "express";
import {
  readAllGpuController,
  createGpuController,
} from "../controllers/gpuControllers.js";

const router = Router();

router.get("/", readAllGpuController);
router.post("/", createGpuController);

export default router;
