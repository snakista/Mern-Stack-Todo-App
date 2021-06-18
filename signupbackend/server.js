const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const routesUrls=require('./routes/routes');
const cors=require('cors');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log('connected'))

app.use(express.json()); //activates body parser
app.use(cors());
//here app is base_path
app.use('/app',routesUrls);
app.listen(4000,()=>console.log('server is running'));