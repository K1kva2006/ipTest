const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    console.log(req.headers["x-forwarded-for"])
    res.status(200).json(req.headers["x-forwarded-for"])
});

app.listen(3000, () => console.log("server is running"));
