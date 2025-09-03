
#Frontend

frontend ui design by react . a todo list . 4 row in a from view in frontend put the data , title ,description,fees, and last row two opition show either pending or success , and below add button when you click add button data save in mongo cluster database ,

when you open the url - https://beautiful-cheesecake-7adb8b.netlify.app/ previous store data show in below edit and delete option also .

dependency npm install , npm run build , than disc file upload in netlify . in local server test for npm run dev , local host url -(http://localhost:3000/)

structure :
D/todolist inside fronend folder inside src folder app.css,app.jsx,main.jsx and a folder components ,inside components todolist.jsx css file all in app.css, backend api fetch in todolist.jsx const API_URL = "https://todo-list-app-ykll.onrender.com/tasks";

hook all thing to app.jsx and after main.jsx ,

#Backend

home url - https://todo-list-app-ykll.onrender.com/ msg - API is running...

route -tasks

method GET :

url -https://todo-list-app-ykll.onrender.com/tasks respone status 200 show all tasks,

[ { "_id": "68b5ce848824e537f36ccce2", "title": "ph", "description": "test", "fees": 59, "status": "pending", "createdAt": "2025-09-01T16:49:08.760Z" }, { "_id": "68ab180eb1b95c7afa90e2ff", "title": "Math Tuition", "description": "3 day at month ", "fees": 1200, "status": "pending", "createdAt": "2025-08-24T13:47:58.568Z" }, { "_id": "688cb57f2118174c9123b66a", "title": "chemistry tutuion", "description": "2 day at month ", "fees": 800, "status": "pending", "createdAt": "2025-08-01T12:39:27.174Z" } ]

method post : url - https://todo-list-app-ykll.onrender.com/tasks

body format -json

{

"title": "ph",
"description": "test",
"fees": 59,
"status": "pending"
}

status response 200

data add in data base

method update :

url -https://todo-list-app-ykll.onrender.com/tasks/id

{ "fees": 60 } status responce 201 , update fees amount .

method delete : url -https://todo-list-app-ykll.onrender.com/tasks/id status responce 200

tasks delete .

database conncet using mongo cluster db ,using .env file mongo cluster data put inside ,and create db.js inside config folder which inside backend folder , there database set up ,

const mongoose = require("mongoose");

const connectDB = async () => { try { const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, });

console.log(`MongoDB Connected: ${conn.connection.host}`);
} catch (error) { console.error(DB connection failed: ${error.message}); process.exit(1); // Exit process with failure } };

module.exports = connectDB;

if database conncet show MongoDB Connected or not connceted show eror msg DB connection failed

taskcontroler.js where i setup logic of insert ,update ,delete , of backend and fectech taskModel,

taskmodel where i setup tasksechma ,

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({ title: { type: String, required: true }, description: { type: String }, fees: { type: Number }, status: { type: String, enum: ["pending", "completed"], default: "pending" }, createdAt: { type: Date, default: Date.now } }, { versionKey: false } );

final app.js where i fech all things and if run in local server frist cd backend then node app.js url- localhost 5000 msg - api runing ...

during setup mongo cluster few things i was help in ai ,, during database conncetion i faced error setup time ,, i used few thing on my previous project ideas.

