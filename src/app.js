import express from "express"
import cors from "cors"
import mainRoute from "./index.route.js"
import fileUpload from 'express-fileupload'
import config from "./config.js"
import Jwt from "jsonwebtoken";

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({
    extended: true,
    limit: '10mb'
}));
app.use(fileUpload({
    limits: { fileSize: 10000000 },
}))

app.use(cors({ origin: '*' }));

app.use('/api/wlc', mainRoute)

app.listen(config.app.port, () => console.log(`Server run on ${config.app.port}`));
