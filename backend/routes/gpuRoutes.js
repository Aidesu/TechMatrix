import { Router } from "express";
import {
    createGpuController,
    readAllGpuController,
    updateGpuController,
    deleteGpuController,
} from "../controllers/gpuControllers.js";

const router = Router();

router.post("/", createGpuController);
router.get("/", readAllGpuController);
router.put("/:id", updateGpuController);
router.delete("/:id", deleteGpuController);

export default router;
