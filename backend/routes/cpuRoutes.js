import { Router } from "express";
import {
    createCpuController,
    readAllCpuController,
    readOneCpuController,
    updateCpuController,
    deleteCpuController,
} from "../controllers/cpuControllers.js";

const router = Router();

router.post("/", createCpuController);
router.get("/", readAllCpuController);
router.get("/:id", readOneCpuController);
router.put("/:id", updateCpuController);
router.delete("/:id", deleteCpuController);

export default router;
