import { Router } from "express";
import {
    addUserControlleur,
    getUserControlleur,
    updateUserControlleur,
} from "../controllers/usersControllers.js";

const router = Router();

router.get("/", getUserControlleur);
router.post("/", addUserControlleur);
router.put("/:id", updateUserControlleur);

export default router;
