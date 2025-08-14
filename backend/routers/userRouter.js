import express from 'express'
import { getDetails, login, register } from '../controllers/userController.js'
import { authMiddleware } from '../middlewares/auth.js'

const userRouter = express.Router()

userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.get('/get',authMiddleware,getDetails)

export default userRouter