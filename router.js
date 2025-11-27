import { Router } from 'express';
import {mainController} from './Controllers/main-controller.js';
import {catalogController} from './Controllers/catalog.controller.js'

const router = Router();

router.get("/", mainController.renderHomePage);
router.get("/catalog", catalogController.displayCatalog);

export default router;