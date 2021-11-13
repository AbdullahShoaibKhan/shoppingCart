require('dotenv').config();
const productData= require('./data/products');
const connectDB=require('./config/db');
const Product=require('./models/Product');

connectDB();
const importData=async()=>{
    try{
        await Product.deleteMany({});
        await Product.insertMany(productData);
        console.log('import sucess');
        process.exit(1);
    }catch(error){
        console.log('import failed');
        process.exit(1);
    }
};
importData();