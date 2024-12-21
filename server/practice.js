const express = require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const participantRoutes=require('./routes/Participants');
require('dotenv').config();

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGOURI)
.then(()=>console.log('mongoodb connected'))
.catch((err)=>console.log(err));

const port=process.env.PORT||5000;


app.use('/api/participants',participantRoutes);

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
});