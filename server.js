const express = require("express");
const app = express();
app.use(express.json());

const dotenv = require("dotenv").config();
const { PORT } = process.env;

const userRoute = require("./routes/uesrs/userRoute");

app.use("/users", userRoute);

app.listen(PORT, () => console.log("Server is listening."));
