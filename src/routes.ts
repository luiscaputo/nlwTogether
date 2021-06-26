import { Router } from "express";
import { CreateUserController } from "./controllers/createUsersController";
import { CreateTagController } from "./controllers/createTagController";
import { ensureAdmin } from "./middleweres/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router }