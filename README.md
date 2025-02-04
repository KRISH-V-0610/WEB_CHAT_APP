# Web Chat Application (MERN Stack)

## 📌 Introduction
This is a real-time web chat application built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). It allows users to create accounts, join chat rooms, and exchange messages in real-time.

## 🚀 Features
- 🔹 User authentication (Signup/Login)
- 🔹 Real-time messaging using WebSockets (Socket.io)
- 🔹 Private and group chat support
- 🔹 Online/offline user status
- 🔹 Responsive UI for mobile and desktop
- 🔹 Secure password hashing and authentication
- 🔹 MongoDB for message storage

## 🛠️ Tech Stack
- **Frontend**: React.js, Redux (if used), TailwindCSS/Material UI
- **Backend**: Node.js, Express.js, Socket.io
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JWT (JSON Web Token), bcrypt.js
- **Real-time Communication**: Socket.io

## 📂 Project Structure
```
.gitignore

Backend/
│── .env
│── .gitignore
│── package-lock.json
│── package.json
│── src/
│   │── app.js
│   │── controllers/
│   │   │── auth.controller.js
│   │   │── message.controller.js
│   │── lib/
│   │   │── cloudinary.js
│   │   │── db.js
│   │   │── utils.js
│   │── middlewares/
│   │   │── auth.middleware.js
│   │── models/
│   │   │── message.model.js
│   │   │── user.model.js
│   │── routes/
│   │   │── auth.route.js
│   │   │── message.route.js

Frontend/
│── .gitignore
│── eslint.config.js
│── index.html
│── package-lock.json
│── package.json
│── postcss.config.js
│── public/
│   │── user.png
│   │── vite.svg
│── README.md
│── src/
│   │── App.jsx
│   │── components/
│   │   │── AuthImagePattern.jsx
│   │   │── ChatContainer.jsx
│   │   │── ChatHeader.jsx
│   │   │── MessageInput.jsx
│   │   │── Navbar.jsx
│   │   │── NoChatSelected.jsx
│   │   │── Sidebar.jsx
│   │   │── skeletons/
│   │   │   │── MessageSkeleton.jsx
│   │   │   │── SidebarSkeleton.jsx
│   │── constants/
│   │   │── index.js
│   │── index.css
│   │── lib/
│   │   │── axios.js
│   │── main.jsx
│   │── pages/
│   │   │── Homepage.jsx
│   │   │── LoginPage.jsx
│   │   │── ProfilePage.jsx
│   │   │── SettingsPage.jsx
│   │   │── SignUpPage.jsx
│   │── store/
│   │   │── useAuthStore.js
│   │   │── useChatStore.js
│   │   │── useThemeStore.js
│── tailwind.config.js
│── vite.config.js

index.html
main.js
README.md
temp.txt
```

## ⚙️ Installation
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/KRISH-V-0610/WEB_CHAT_APP.git
cd WEB_CHAT_APP
```
### 2️⃣ Install Dependencies
#### Backend:
```bash
cd server
npm install
```
#### Frontend:
```bash
cd client
npm install
```
### 3️⃣ Set Up Environment Variables
Create a `.env` file in the **server/** directory and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
CLIENT_URL=http://localhost:3000
```

### 4️⃣ Start the Application
#### Backend:
```bash
cd server
npm start
```
#### Frontend:
```bash
cd client
npm start
```
The app will run at **http://localhost:3000**

## 🛡️ Security Measures
- Password hashing using **bcrypt.js**
- Authentication via **JWT**
- Secure WebSocket connections

## 📌 Future Enhancements
- ✅ Message notifications
- ✅ Chat message reactions
- ✅ Voice & video calling
- ✅ Cloud storage for images/files

## 🏆 Contributions
Contributions are welcome! Feel free to fork the repository, create a new branch, and submit a pull request.

## 📜 License
This project is licensed under the **MIT License**.

---
**Developed by KRISH-V-0610** 🚀