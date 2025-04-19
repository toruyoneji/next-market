import mongoose from "mongoose";

const connectDB = async() => {
    
    try {
        await mongoose.connect("mongodb+srv://toruyone:XeQAbBbhi0ZKsH1H@cluster0.ziqiyqq.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Success: Connected to MongoDB");
    } catch {
        console.log("Failure: Unconnected to MongoDB");
        throw new Error();
    }
}

export default connectDB;