const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const Users = require("./Users.json");

app.use(cors());
app.get("/", (req, res) => {
    res.send(Users);
})


app.listen(port, () => {
    console.log("Works");
})