const express = require('express')
const Router= express.Router()
const blogController = require('../Controller/blogController')

Router.get('/',blogController.blog_index)
Router.post('/',blogController.blog_create_post)
Router.get('/create',blogController.blog_create_get)
Router.get('/:id',blogController.blog_details)
Router.delete('/:id',blogController.blog_delete)

module.exports = Router