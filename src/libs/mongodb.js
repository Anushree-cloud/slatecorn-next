import mongoose from "mongoose";


const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("=================DB CONNECTION ERROR===========================")
        console.log("db connection error", error)
        console.log("================================================================")
    }
}

export default connectDB; 
