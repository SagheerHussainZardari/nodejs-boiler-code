import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import "./config/db.js";
import router from "./routes/index.route.js"

const app = express();
dotenv.config();
app.use(bodyParser.json());

app.use(router);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server running on http://127.0.0.1:"+process.env.PORT);
});
