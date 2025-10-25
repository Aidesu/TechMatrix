import { Router } from "express";
import {
    addUserControlleur,
    deleteUserControlleur,
    getUserByIdControlleur,
    getUserControlleur,
    updateUserControlleur,
} from "../controllers/usersControllers.js";

const router = Router();

router.get("/", getUserControlleur);
router.get("/:id", getUserByIdControlleur);
router.delete("/:id", deleteUserControlleur);
router.post("/", addUserControlleur);
router.put("/:id", updateUserControlleur);

export default router;
