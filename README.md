# task-app

#Task Manager – Full Stack CRUD App (Vue + Node.js + MongoDB)

This is a full-stack **Task Management** web application built using **Vue.js** for the frontend, **Node.js + Express** for the backend, and **MongoDB** for the database. It allows users to **create, read, update, and delete tasks** in a clean and responsive interface.

### ⚙️ Tech Stack

**Frontend:**

* Vue 3 (Composition API)
* Vue Router
* Axios
* Vite (build tool)

**Backend:**

* Node.js
* Express.js
* MongoDB with Mongoose
* CORS + JSON middleware

---

### 🚀 Features

* ✅ Add new tasks with title & description
* 📋 View a list of all tasks
* ✏️ Edit/update task details
* ❌ Delete tasks
* ✔️ Mark tasks as completed
* 🔗 Connects to MongoDB for persistent storage

---

### 🛠️ Installation & Run Locally

#### 📦 Backend

```bash
cd backend
npm install
node server.js
```

> Make sure MongoDB is running locally or update the connection URI to MongoDB Atlas if using cloud.

#### 💻 Frontend

```bash
cd frontend
npm install
npm run dev
```

Then open: `http://localhost:5173`

---

### 📂 Folder Structure

```
task-app/
├── backend/       # Node + Express + MongoDB (API)
│   ├── models/
│   ├── routes/
│   └── server.js
└── frontend/      # Vue 3 frontend
    ├── src/
    ├── components/
    └── views/
```

---

### 🌐 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/tasks`     | Get all tasks     |
| POST   | `/api/tasks`     | Create a new task |
| PUT    | `/api/tasks/:id` | Update a task     |
| DELETE | `/api/tasks/:id` | Delete a task     |

---

### 📌 To Do / Future Improvements

* Add user authentication (JWT)
* Task filters: completed/pending
* Drag-and-drop task sorting
* Responsive mobile UI

---

### 👤 Author

> Developed by \[Khushi Kashyap]
> GitHub: [@khushikashyap125](https://github.com/yourgithub)

# Task_app
