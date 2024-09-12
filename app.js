const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    console.log(req.headers["x-forwarded-for"] || req.connection.remoteAddress)
    res.status(200).json("hello")
});

app.listen(3000, () => console.log("server is running"));
