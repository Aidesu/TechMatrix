import { Router } from "express";
import {
    addUserControlleur,
    deleteUserControlleur,
    getUserControlleur,
    updateUserControlleur,
} from "../controllers/usersControllers.js";

const router = Router();

router.get("/", getUserControlleur);
router.delete("/:id", deleteUserControlleur);
router.post("/", addUserControlleur);
router.put("/:id", updateUserControlleur);

export default router;
