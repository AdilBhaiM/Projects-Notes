import express from 'express';
import MyCRUD from '../controllers/Controller.js';
const router = express.Router();


router.get('/', MyCRUD.getDOc)
router.get('/:id', MyCRUD.getDOc)
router.put('/update/:id', MyCRUD.updateDoc)
router.post('/create', MyCRUD.createDoc)
router.delete('/delete/:id', MyCRUD.deleteDoc)


export default router