import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/bd.js'
import connectCloudinary from './config/cludynery.js'
import userRouter from './routes/userRouter.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'

// App config

const app = express()
const port = process.env.PORT
connectCloudinary()
 

// middleware




app.use(cors({
  origin: ['https://admin-panel-vab9.onrender.com', 'https://fronted-1gmi.onrender.com'], // React dev server
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type','Authorization'],
  credentials: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));





// api endpoints

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)


app.get('/',(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`server started ${port}`)
    connectDb()
})
