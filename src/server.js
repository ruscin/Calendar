const express = require("express");
const mongoose = require("mongoose")

require('dotenv').config();

const app = express();


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);



app.get("/", (req, res) => {
    res.send("we are on gome")
})

app.get("/posts", (req, res) => {
    res.send("we are on posts")
})

app.listen(8080)