const express = require('express');
require('dotenv').config();
const { userRouter } = require("./router/userRouter")
const {newsRouter} = require("./router/newsRouter")
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter)
app.use("/news",newsRouter)

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});


module.exports = app;