const express = require("express");
const app =  express();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.route");
require("./config/db");


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api/users", userRouter);

// home route
app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/views/index.html");
});

// route not found
app.use((req, res, next) => {
    res.status(404).json({
        message:"route not found"
    });
});

// server error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "something broken"
    });
});



module.exports = app;