import { Router } from "express";
import {
  readAllCpuController,
  createCpuController,
  updateCpuController,
  deleteCpuController,
} from "../controllers/cpuControllers.js";

const router = Router();

router.get("/", readAllCpuController);
router.post("/", createCpuController);
router.put("/:id", updateCpuController);
router.delete("/:id", deleteCpuController);

export default router;
