const Router = require('express')
const postController = require('../controllers/post.controller')
const router = new Router()

router.post('/posts', postController.createPost)
router.get('/posts', postController.getPostsByUser)

module.exports = router
