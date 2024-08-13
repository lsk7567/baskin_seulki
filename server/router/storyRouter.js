import express from 'express'
import * as controller from '../controller/storyController.js'

const router= express.Router()

router
    .get('/history', controller.getHistory)
    .get('/story', controller.getStory)
    .get('/bebetter', controller.getBebetter)

export default router;