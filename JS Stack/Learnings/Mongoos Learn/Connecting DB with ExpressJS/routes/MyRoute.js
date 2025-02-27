import express from 'express';
import home from '../controllers/home.js';
import skill from '../controllers/skill.js';
import contact from '../controllers/contact.js';
import services from '../controllers/services.js';
const router = express.Router();


// router.get('/', home)
router.get('/skills', skill)
router.get('/contact', contact)
router.get('/services', services)


export {router}