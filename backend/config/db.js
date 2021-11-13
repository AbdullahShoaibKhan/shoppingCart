require('dotenv').config()
const mongoose = require('mongoose');

const connectDB = async ()=>{
try {
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true    
    });
    console.log("mongo succesful");
}catch (error){
    console.log('mongo failed');
    process.exit(1);
}
};
module.exports= connectDB;