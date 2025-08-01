🗃️ MongoDB for storing task data

🧠 Mongoose schema with fields:

title (required)

description

fees

status (enum: "pending", "completed")

createdAt (auto timestamp)

🔁 RESTful API with full CRUD:

POST /api/todos - Create new task

GET /api/todos - Get all tasks

PUT /api/todos/:id - Update a task

DELETE /api/todos/:id - Delete a task

🌐 Cross-Origin Resource Sharing (CORS) enabled