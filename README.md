v# 🏗️ Fullstack User Management – Task 4 (Angular + Node + Express + MongoDB)

This project is a **full-stack User Management System** built as part of the **Bucket Study Internship - Task 4**.  
It includes **Angular frontend**, **Node.js + Express backend**, and **MongoDB database**, deployed on **Vercel & Render**.

---

## 🚀 Live Demo

| Component | Link |
|----------|------|
| **Frontend (Angular - Vercel)** | https://task4-frontend-angular-er82piipl-hariharans-projects-db9603ec.vercel.app |
| **Backend API (Render)** | https://hariharan202135-bs1765869829324-task4.onrender.com |
| **GET All Users API** | https://hariharan202135-bs1765869829324-task4.onrender.com/users |

---

## 📂 Project Structure

Task4_Frontend_Integration/
│
├── backend-node/ # Node.js + Express + MongoDB backend
│ ├── server.js # Main server file
│ ├── package.json
│ ├── .env # MONGO_URI stored here (not committed)
│ └── models/ # User Schema
│
├── frontend-angular/ # Angular Frontend
│ ├── src/app/components/user/
│ │ ├── user.component.ts
│ │ ├── user.component.html
│ │ └── user.component.css
│ ├── src/app/services/user.service.ts
│ ├── angular.json
│ └── package.json
│
└── README.md


---

## 🛠️ Tech Stack

| Area | Technology |
|-----|------------|
| Frontend | Angular, TypeScript, HTML, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Hosting | Render (Backend), Vercel (Frontend) |

---

## ⚙️ Installation & Run Locally

### 1️⃣ Clone Repository

```bash
git clone <your-github-repo-url>
cd Task4_Frontend_Integration

---

## 🛠️ Tech Stack

| Area | Technology |
|-----|------------|
| Frontend | Angular, TypeScript, HTML, CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Hosting | Render (Backend), Vercel (Frontend) |

---

## ⚙️ Installation & Run Locally

### 1️⃣ Clone Repository

```bash
git clone <your-github-repo-url>
cd Task4_Frontend_Integration
Frontend Setup
cd frontend-angular
npm install
ng serve --open


App opens in:

http://localhost:4200

📡 API Endpoints
Method	Endpoint	Description
GET	/users	Fetch all users
POST	/users	Add user
DELETE	/users/:id	Delete user
🌍 Deployment
Backend → Render

Uses server.js

Environment Variable → MONGO_URI

Always keep server running using Render Free Tier

Frontend → Vercel

Build Angular before deploy:

ng build --configuration production


Upload dist/frontend-angular to Vercel

📸 Screenshots
🔥 Live Angular UI

(Add your screenshot here)

🌐 Render Backend Live

(Add screenshot here)

🏁 Completion Status

✔ Backend Hosted
✔ Frontend Hosted
✔ Database Connected
✔ CRUD Working
✔ Task Deployment Successful 🎉

✨ Credits

Developed by Hari Haran
For Bucket Study Internship – Task 4 Frontend Integration
