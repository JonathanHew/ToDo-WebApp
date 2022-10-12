const express = require("express");
const app = express();
const cors = require("cors");
//we use pool to make PostgreSQL queries 
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a todo

//get all todos

//get a todo

//update a todo 

//delete a todo

app.listen(5001, () => {
    console.log("server has started on port 5001!");
});