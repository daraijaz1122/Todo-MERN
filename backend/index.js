const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const todoRouter = require("./routes/todo")
const corsOptions = {
    origin: 'http://localhost:5173'
}
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use("/todo", todoRouter);
app.listen(3000, () => {
    console.log("listening on port 3000")
})
