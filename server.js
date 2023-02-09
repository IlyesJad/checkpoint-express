const express = require("express");
const logger = require("./middleware/logger")
const app= express()
app.use(logger)
app.use (express.static( __dirname + "/public"));
const PORT = 5000;

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`server is ruuning on port ${PORT}`);
})