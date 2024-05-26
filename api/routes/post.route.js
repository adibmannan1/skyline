import express from 'express'
import { addPost, deletePost, getPost, getPosts, updatePost } from '../controllers/post.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'
const router= express.Router()

router.get('/', getPosts)
router.get('/:id', getPost)
router.post('/add', verifyToken, addPost)
router.put('/update/:id', verifyToken, updatePost)
router.delete('/delete/:id', verifyToken, deletePost)

export default router