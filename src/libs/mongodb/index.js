import mongoose from "mongoose";


const connectDB = async () => {
    try{
        console.log("Connected to MongoDB")
        return await mongoose.connect(process.env.MONGODB_URI)
        
    } catch (error) {
        console.log("=================DB CONNECTION ERROR===========================")
        console.log("db connection error", error)
        console.log("================================================================")
    }
}

export default connectDB;
