// import { Router } from "express";
import express from 'express'
const router = express.Router()
import { studentAll } from '../controller/sutdentController.js'
import { teacherAll } from '../controller/teacherController.js'

router.get('/', studentAll)
router.get('/about', teacherAll)

export default router