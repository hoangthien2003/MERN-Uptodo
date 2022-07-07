import express from "express";
import { getTodos, createTodos } from "../controllers/posts.controller.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodos);

export default router;
