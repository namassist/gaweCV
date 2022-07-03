import express from "express";
import { getUsers, register, login } from "../controllers/Users.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", register);
router.post("/login", login);

export default router;
