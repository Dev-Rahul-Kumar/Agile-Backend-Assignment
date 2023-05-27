const controller = require('../controller/Ctrl');
const express = require('express')
const upload = require('../multer/multer')

const route =express.Router()

const url ='/api/v3/app';

route.post(`${url}/events`,upload.single("myimage"),controller.add)
route.get(`${url}/events`, controller.get)
route.get(`${url}/events/:id`,controller.getOne)
route.put(`${url}/events/:id`,upload.single("myimage"),controller.edit)
route.delete(`${url}/events/:id`,controller.delete)


module.exports=route
