import { Router } from "express";
import { aiControllers } from "../controllers/aiControllers.js";

const router = Router();

router.post("/ask", aiControllers);

export default router;
