const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
require("colors");
const morgan = require("morgan");


// config dotenv
dotenv.config()

// connection mongodb
connectDB()

const app = express()

// middlewares
app.use(express.json())
app.use(morgan("dev"))

// route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.get("/", (req, res) => {
    res.send("<h1>by nodemon</h1>");
});

const port = process.env.PORT || 3002
app.listen(port, () => {
    console.log(`Server Running On ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white);
});