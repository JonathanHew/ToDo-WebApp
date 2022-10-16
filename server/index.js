const express = require("express");
const app = express();
const cors = require("cors");
//we use pool to make PostgreSQL queries
const pool = require("./db");

//middleware
app.use(cors());
//this line lets us use req.body in requests
app.use(express.json());

//ROUTES//

//create a todo, post is used because we are adding data
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING * ",
      [description]
    );

    //newTodo.rows[0] returns only the necessary data, "todo_id" and "description"
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//get all todos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a specific todo

//update a todo

//delete a todo

app.listen(5001, () => {
  console.log("server has started on port 5001!");
});
