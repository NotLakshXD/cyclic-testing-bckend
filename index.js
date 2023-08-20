const express = require('express');
const app = express();
app.get("/", (req, res) => {
    res.send("this route is home routes")
})
app.get("/laksh", (req, res) => {
    res.send("this is laksh route")
})
app.get("/chakresh", (req, res) => {
    res.send("this route is for chakresh")
})
app.listen(8080, () => {
    console.log("server started on port 8080")
})