import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", fees: "", status: "pending" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setTasks(res.data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  const handleSubmit = async () => {
    if (!form.title.trim()) return alert("Title is required");

    try {
      if (editingId) {
        const res = await axios.put(`${API_URL}/${editingId}`, form);
        setTasks(tasks.map(t => (t._id === editingId ? res.data : t)));
      } else {
        const res = await axios.post(API_URL, form);
        setTasks([res.data, ...tasks]);
      }
      setForm({ title: "", description: "", fees: "", status: "pending" });
      setEditingId(null);
    } catch (err) {
      console.error("Submit error:", err);
      alert("Error saving task.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter(t => t._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete.");
    }
  };

  const handleEdit = (task) => {
    setForm({ title: task.title, description: task.description, fees: task.fees, status: task.status });
    setEditingId(task._id);
  };

  return (
    <div className="todo-container">
      <h2>📋 To-Do List</h2>

      <div className="input-row">
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Title"
        />
        <input
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Description"
        />
        <input
          value={form.fees}
          onChange={(e) => setForm({ ...form, fees: e.target.value })}
          placeholder="Fees"
          type="number"
        />
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={handleSubmit}>{editingId ? "Update" : "Add"}</button>
      </div>

      <div className="card-list">
        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          tasks.map(task => (
            <div key={task._id} className="card">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Fees: ₹{task.fees}</p>
              <p>Status: <strong>{task.status}</strong></p>
              <p><small>{new Date(task.createdAt).toLocaleString()}</small></p>
              <button onClick={() => handleEdit(task)}>✏️ Edit</button>
              <button onClick={() => handleDelete(task._id)}>🗑️ Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;
