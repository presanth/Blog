const express = require('express')
const userController = require('../Controller/user.controller')
const blogController = require('../Controller/blog.controller')
const router = express.Router()
const upload = require('../multer/multer')
const uploadBlog = require('../multer/blogMulter')

router.post('/register', upload.single('file'), userController.signup)
router.post('/userLogin', userController.checkUser)
router.get('/getpersonalData/:id', userController.findpersonalData)

router.post('/createBlog', uploadBlog.single('file'), blogController.newBlog)
router.get('/getAllBlogs', blogController.findBlog)
router.get('/getpersonalBlogs/:id', blogController.findpersonalBlog)

module.exports = router