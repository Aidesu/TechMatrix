import { Router } from "express";
import {
    createGpuController,
    readAllGpuController,
    readOneGpuController,
    updateGpuController,
    deleteGpuController,
} from "../controllers/gpuControllers.js";

const router = Router();

router.post("/", createGpuController);
router.get("/", readAllGpuController);
router.get("/:id", readOneGpuController);
router.put("/:id", updateGpuController);
router.delete("/:id", deleteGpuController);

export default router;
