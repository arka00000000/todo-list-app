#[Frontend](https://beautiful-cheesecake-7adb8b.netlify.app/)


frontend ui design by react . a todo list . 4 row in a from  view in frontend put the data , title ,description,fees, and last row two opition show either pending or success , and below add button when you click add button data save in mongo cluster database ,

when you open the url - https://beautiful-cheesecake-7adb8b.netlify.app/  previous store data show in below edit and delete option also .

 dependency npm install ,
 npm run build ,
 than disc file upload in netlify .
 in local server  test  for npm run dev ,
  local host url -(http://localhost:3000/)

 structure  :  
 D/todolist inside fronend folder inside src folder app.css,app.jsx,main.jsx and a folder components ,inside components todolist.jsx 
 css file all in app.css,
 backend api fetch in todolist.jsx 
 const API_URL = "https://todo-list-app-ykll.onrender.com/tasks";

 hook all thing to app.jsx and after main.jsx ,


 #[Backend](https://todo-list-app-ykll.onrender.com/)


 home url - https://todo-list-app-ykll.onrender.com/
 msg - API is running...

 route -tasks

 method GET :

 url -https://todo-list-app-ykll.onrender.com/tasks
 respone  status 200 
 show all tasks,


   [
  {
    "_id": "68b5ce848824e537f36ccce2",
    "title": "ph",
    "description": "test",
    "status": "pending",
    "createdAt": "2025-09-01T16:49:08.760Z"
  },
  {
    "_id": "68ab180eb1b95c7afa90e2ff",
    "title": "Math Tuition",
    "description": "3 day at month ",
    "status": "pending",
    "createdAt": "2025-08-24T13:47:58.568Z"
  },
  {
    "_id": "688cb57f2118174c9123b66a",
    "title": "chemistry tutuion",
    "status": "pending",
    "createdAt": "2025-08-01T12:39:27.174Z"
  }
]

method  post :
url - https://todo-list-app-ykll.onrender.com/tasks

body format -json 

{
    
    "title": "ph",
    "description": "test",
    "status": "pending"
   
  }
 
 status response 200

 data add in data base 

method  update :

url -https://todo-list-app-ykll.onrender.com/tasks/id 

{ "title": physic
 } 
 status responce 201 ,
 update  .

 method delete :
 url -https://todo-list-app-ykll.onrender.com/tasks/id 
 status responce 200

 tasks delete .



 database conncet using mongo cluster db ,using .env file mongo cluster data put inside ,and create db.js inside config folder which inside backend folder , there database set up ,

 during database conncetion i faced error setup time ,, i used few thing  on my previous project ideas.

