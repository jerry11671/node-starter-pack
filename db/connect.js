import mongoose from "mongoose";

const connectDB = async (uri) => {
    mongoose.connect(uri);
}



export default connectDB;