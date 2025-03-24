const expressAsyncHandler = require("express-async-handler");
const Task = require("../model/taskSchema");

const getUserTask = expressAsyncHandler(async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.params.id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404);
    throw new Error("Task not found");
  }
});

const updateTaskStatus = expressAsyncHandler(async (req, res) => {
  res.json({
    msg: "Update",
  });
});

module.exports = { getUserTask, updateTaskStatus };
