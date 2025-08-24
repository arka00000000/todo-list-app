backend deploy link -  https://todo-list-app-ykll.onrender.com
router tasks ,, 
frontend deploy link - https://beautiful-cheesecake-7adb8b.netlify.app/  


i used previous  assingment 7  idea , here use  get method , post method , put method ,  delete method.

my database is mongo altas , i use env file in backend
MONGO_URI=mongodb+srv://ghosharka1997:Arka12345@cluster0.swhzv9p.mongodb.net/todoDB?retryWrites=true&w=majority&appName=Cluster0
.
and forntend connet to backend  , frontend inside src  inside componetes inside todolist.jsx folder  . 
const API_URL = "https://todo-list-app-ykll.onrender.com/tasks";  
 which is connent frontend with backend ,,


beacuse i already deploy my backend in render -https://todo-list-app-ykll.onrender.com.

backend work ,

base url :  https://todo-list-app-ykll.onrender.com
msg cominng   API is running...,

router :tasks,

Method Get :
base url : https://todo-list-app-ykll.onrender.com/tasks

show all task ,
status response 200,

{
        "_id": "688cb57f2118174c9123b66a",
        "title": "chemistry tutuion",
        "description": "2 day at month ",
        "fees": 800,
        "status": "pending",
        "createdAt": "2025-08-01T12:39:27.174Z"
    }

    {
        "_id": "688cb57f2118174c9123b66a",
        "title": "chemistry tutuion",
        "description": "2 day at month ",
        "fees": 800,
        "status": "pending",
        "createdAt": "2025-08-01T12:39:27.174Z"
    } ,

     {
        "_id": "68ab180eb1b95c7afa90e2ff",
        "title": "Math Tuition",
        "description": "3 day at month ",
        "fees": 700,
        "status": "pending",
        "createdAt": "2025-08-24T13:47:58.568Z"
    }


Method post  :
base url : https://todo-list-app-ykll.onrender.com/tasks

format :json (body)
create tasks .
status response 200,
{
        "title": "chemistry tutuion",
        "description": "2 day at month ",
        "fees": 800,
        "status": "pending",
        "createdAt": "2025-08-01T12:39:27.174Z"
    } ,

  Method put  :
base url : https://todo-list-app-ykll.onrender.com/tasks/id

update things ,,
 https://todo-list-app-ykll.onrender.com/tasks/68ab180eb1b95c7afa90e2ff

 {
 "fees": 1200
 }


 status response 200
 {
    "_id": "68ab180eb1b95c7afa90e2ff",
    "title": "Math Tuition",
    "description": "3 day at month ",
    "fees": 1200,
    "status": "pending",
    "createdAt": "2025-08-24T13:47:58.568Z"
}


method delete 
base url : https://todo-list-app-ykll.onrender.com/tasks/id

 https://todo-list-app-ykll.onrender.com/tasks/68ab180eb1b95c7afa90e2ff
 status response 200

Task deleted successfully.



frontend .

Project name
Example: Todo List 

Tech stack
Example: React , Tailwind CSS, Axios, etc.

Purpose
Example: Simple UI for creating, viewing, updating, and deleting tasks from the backend API.




conncet with mongo db altas to backend i was taking help of gudiance of chatgpt ,







