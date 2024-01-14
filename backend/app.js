const express = require("express");
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
app.use(express.json());
app.listen(3000,()=>{
    console.log("listening on port 3000");
});
app.use(cookieParser());
