import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import adminRouter from './routes/adminRoute.js'  // This was missing

const app= express()
const port= process.env.PORT || 4000
connectDB()

app.use(express.json())
app.use(cors())
//api endpoints
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)

app.get('/',(req,res)=>{
    res.send('WORKING')
})

app.listen(port, ()=> console.log("server started", port))