const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")
require("dotenv").config();

const connectToDatabase = require("./database");


connectToDatabase();
const app = express();
app.use(routes);  


const port = 3001;





app.listen(port,()=>{
    console.log("Rodando servidor")
}) 