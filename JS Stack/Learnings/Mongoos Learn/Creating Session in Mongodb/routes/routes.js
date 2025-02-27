import express from 'express';
import myControllers from '../controllers/controller.js';
const router = express.Router();


router.get('/create', myControllers.createSession)
router.get('/get', myControllers.getSession)

export default router