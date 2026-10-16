import mongoose from "mongoose";
import config from "./config.js";

const uri = "mongodb://olrnew-mongodb-01/?authSource=admin";

const mainConn = mongoose.createConnection(uri, {
    user: config.db.mongo.username,
    pass: config.db.mongo.password,
});

// ใช้ useDb เพื่อแยก database
export const dbBox = mainConn.useDb(config.db.mongo.dbBox);
