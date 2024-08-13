import express from 'express'
import * as controller from '../controller/cscenterController.js'

const router=express.Router()

router 
    .get('/praise', controller.getPraise)
    .get('/faq',controller.getFAQ)
    .get('/notice',controller.getNotice)
    .get('/notice/detail/:id', controller.getNoticeDetail)

export default router;