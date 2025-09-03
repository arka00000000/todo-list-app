const Task = require("../models/taskModel");

exports.getTasks = async (req, res) => {
  try {
    const { search, status, sortBy, sortOrder } = req.query;

    const filter = {};

    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }

    if (status) {
      filter.status = status;
    }

   
    const tasks = await Task.find(filter).sort({
      [sortBy || "createdAt"]: sortOrder === "asc" ? 1 : -1
    });

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tasks", error: err.message });
  }
};



// Post task
exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await Task.create({ title, description, status });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Error creating task", error: err.message });
  }
};exports.createTask = async (req, res) => {
  try {
    const { title, description, fees, status } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await Task.create({ title, description, fees, status });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Error creating task", error: err.message });
  }
};


// Put task
exports.updateTask = async (req, res) => {
  try {
    const { title, description, status, fees } = req.body;

    if (!title && !description && !status  === undefined) {
      return res.status(400).json({ message: "Nothing to update" });
    }

    const updates = {};

    if (title) updates.title = title;
    if (description) updates.description = description;
    if (status) {
      if (!["pending", "completed"].includes(status)) {
        return res.status(400).json({ message: "Invalid status value" });
      }
      updates.status = status;
    }
   

    const task = await Task.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: "Error updating task", error: err.message });
  }
};



// Delete task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting task", error: err.message });
  }
};
