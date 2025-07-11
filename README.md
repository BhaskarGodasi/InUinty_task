# Peer Learning Tracker Lite

A minimal full-stack web app for users to join groups and track their learning goals. Built with React (Vite), Node.js, Express, and MongoDB.

---

## 🚀 Features
- **User Authentication:** Mock login with JWT
- **Join a Group:** View and join learning groups
- **Create Group:** Add new groups from the UI
- **Track Goals:** Add and view learning goals (title, progress %, deadline)
- **State Management:** React Context API
- **Mobile Responsive:** Clean, responsive UI with media queries

---

## 🛠️ Tech Stack
- **Frontend:** React (Vite), Axios, Context API, CSS (media queries)
- **Backend:** Node.js, Express, MongoDB (Mongoose), JWT, bcryptjs
- **Database:** MongoDB

---

## 📁 Folder Structure
```
InUnity-Task/
  frontend/           # React (Vite) app
    src/
      components/     # UI components (Login, GroupList, GoalList, AddGoal, CreateGroup)
      contexts/       # React Contexts (Auth, Group, Goal)
      App.jsx         # Main app
      main.jsx        # Entry point
      index.css       # Global & responsive styles
  backend/            # Node.js + Express API
    models/           # Mongoose models (User, Group, Goal)
    routes/           # Express routes (auth, groups, goals)
    .env              # Environment variables
    server.js         # Express server
    package.json      # Backend dependencies
```

---

## ⚡ Quick Start

### 1. **Clone the repo**
```bash
git clone <your-repo-url>
cd InUnity-Task
```

### 2. **Backend Setup**
```bash
cd backend
npm install
# Set up your MongoDB URI and JWT secret in .env
cp .env.example .env # (if provided)
# Example .env:
# MONGO_URI=mongodb://localhost:27017/peerlearning
# JWT_SECRET=supersecretkey
# PORT=5000
npm start
```

### 3. **Frontend Setup**
```bash
cd ../frontend
npm install
npm run dev
```

### 4. **Usage**
- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Register/login with any username/password (mock auth).
- Create a group, join groups, and add learning goals.

---

## 🧩 API Endpoints

### **Auth**
- `POST /api/auth/login` — Login or register (mock)
  - Body: `{ username, password }`
  - Returns: `{ token, user }`

### **Groups**
- `GET /api/groups` — List all groups
- `POST /api/groups` — Create a new group
  - Body: `{ name }`
- `POST /api/groups/join` — Join a group
  - Body: `{ userId, groupId }`

### **Goals**
- `GET /api/goals/:groupId` — List all goals for a group
- `POST /api/goals` — Add a new goal
  - Body: `{ title, progress, deadline, user, group }`

---

## 📝 Notes
- **State Management:** Uses React Context for auth, groups, and goals.
- **Responsiveness:** Mobile-friendly with CSS media queries.
- **Security:** JWT is stored in memory/localStorage for demo purposes. For production, use secure storage and HTTPS.
- **Demo Auth:** Any username/password combo will register or log in a user.

---
## Responsiveness
- **Mobile View :** <img width="451" height="475" alt="Screenshot 2025-07-11 102129" src="https://github.com/user-attachments/assets/acba12c1-9594-4ee9-9546-15241b9e771c" />
- **Laptop View :** <img width="1884" height="989" alt="Screenshot 2025-07-11 102207" src="https://github.com/user-attachments/assets/12d1a866-9c98-45c7-836b-75f0d1b5d278" />



