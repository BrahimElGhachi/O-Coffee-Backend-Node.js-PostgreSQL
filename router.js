import { Router } from 'express';
import {mainController} from './Controllers/main-controller.js';
import {catalogController} from './Controllers/catalog.controller.js'

const router = Router();

router.get("/", catalogController.displayNewCoffees);
router.get("/catalog", catalogController.displayCatalog);
router.get("/catalog/:id", catalogController.displayCoffeeDetail);

export default router;