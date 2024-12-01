import { MONGODB_URI } from "@/env";
import { Db, MongoClient } from "mongodb";


if (!MONGODB_URI) {
    throw new Error("MONGO_URI is not defined.")
}

const uri = MONGODB_URI;
const client = new MongoClient(uri);

let database: Db | undefined;

export async function connectToDatabase() {
    try {
        await client.connect();
        database = client.db('music-player');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
}

export function getDatabase() {
    if (!database) {
        throw new Error("Database connection has not been established.")
    }
    return database;
}