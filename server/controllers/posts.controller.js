import { TodoModel } from "../models/todoModel.js";

export const getTodos = async (req, res) => {
  try {
    const todo = new TodoModel({
      title: "Learning express",
      description: "Within 25 minutes and 5 minutes break time",
      priority: 1,
    });
    todo.save();

    const todos = await TodoModel.find();
    console.log("todos: ", todos);
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const createTodos = (req, res) => {
  res.send("CREATE SUCCESS");
};
