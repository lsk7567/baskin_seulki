import express from 'express'
import * as controller from '../controller/MainController.js'

const router = express.Router();
router
.get('/', controller.getEvent)
.get('/newitem', controller.newItem)



export default router;