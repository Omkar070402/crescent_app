import express from 'express'
import cors from 'cors'
import db from './configs/db.js'
import userRouter from './routers/userRouter.js'
import dotenv from 'dotenv'

dotenv.config()



const app = express()
app.use(cors())
app.use(express.json())

const PORT = 4000

// database
db

app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send('server working')
})

app.listen(PORT,()=>{
   console.log(`server is running on PORT:${PORT}`) 
})




