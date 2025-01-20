import express from 'express';
import myControllers from '../controllers/controller.js';
const router = express.Router();

// router.use('/', myControllers.clear_cookie)
// router.use('/set', myControllers.set_cookie)
router.use('/get', myControllers.get_session)
// router.use('/clear', myControllers.clear_cookie)

export default router