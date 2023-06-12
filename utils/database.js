import mongoose from "mongoose";

let connected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (connected) {
        console.log("Already connected to database");
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.MONGODB_DB,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        connected = true;
        console.log("Connected to database");
    } catch(e){
        console.log("Error connecting to database: ", e);
    }
};