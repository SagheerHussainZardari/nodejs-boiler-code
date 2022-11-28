import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/index.route.js"
import connection from "./config/db.js";
import logger from "./logger.js";


const app = express();
dotenv.config();
connection();

app.use(bodyParser.json());

app.use(router);

app.listen(process.env.PORT || 3000, ()=>{
    logger.info("Server running on http://127.0.0.1:"+process.env.PORT);
});
