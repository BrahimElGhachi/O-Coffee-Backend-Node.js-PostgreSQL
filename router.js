import { Router } from "express";
import mainController from "./Controllers/main-controller.js";

const router = Router();

router.get("/", mainController.renderHomePage);
router.get("/catalog", mainController.renderCatalogPage);

export default router;