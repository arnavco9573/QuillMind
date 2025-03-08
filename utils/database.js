import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
    mongoose.set("strictQuery", true);
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
        });

        isConnected = true;
        console.log("MongoDB successfully connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};
