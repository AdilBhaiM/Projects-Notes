import express from 'express';
import Controllers from '../controllers/controller.js';
const router = express.Router()


router.get('/', Controllers.home)
router.get('/Signup', Controllers.Signup)
router.post('/Signup', Controllers.createUser)
router.get('/Login', Controllers.Login)
router.post('/Login', Controllers.findUser)

export default router