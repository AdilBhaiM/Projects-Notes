import express from 'express';
import MyCRUD from '../controllers/Controller.js';
const router = express.Router();


router.get('/', MyCRUD.AllList)
router.post('/add', MyCRUD.PostAddedDoc)
router.get('/add', MyCRUD.addDoc)
router.get('/edit/:id', MyCRUD.showDoc)
router.post('/edit/:id', MyCRUD.editDoc)
router.post('/delete/:id', MyCRUD.DeleteDoc)

export default router