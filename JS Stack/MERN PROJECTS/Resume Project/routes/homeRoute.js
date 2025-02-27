import express from 'express';
import home from '../controllers/home.js';
import { homeMiddle } from '../middlewares/homemiddle.js';
const router = express.Router();

router.use(homeMiddle)
router.get('/', home)

export default router