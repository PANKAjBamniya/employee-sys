const expressAsyncHandler = require("express-async-handler");
const Task = require("../model/taskSchema");
const User = require("../model/userSchema");

const allTasts = expressAsyncHandler(async (req, res) => {
  const tasks = await Task.find();

  if (!tasks) {
    res.status(404);
    throw new Error("No tasks found");
  }

  res.status(200).json(tasks);
});

const allUsers = expressAsyncHandler(async (req, res) => {
  const user = await User.find();

  if (!user) {
    res.status(404);
    throw new Error("No tasks found");
  }

  res.status(200).json(user);
});

const tastAdd = expressAsyncHandler(async (req, res) => {
  const { title, date, assignedTo, description } = req.body;

  if (!title || !date || !assignedTo || !description) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  const newTask = await Task.create({
    title,
    date,
    assignedTo,
    description,
  });

  if (!newTask) {
    res.status(400);
    throw new Error("Failed to add task");
  }
  res.status(201).json(newTask);
});

module.exports = {
  tastAdd,
  allTasts,
  allUsers,
};
