const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const todoRouter = require("./routes/todo")

app.use(bodyParser.json());
app.use("/todo", todoRouter);
app.listen(3000, () => {
    console.log("listening on port 3000")
})
