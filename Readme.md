# Employee Management System

## 📌 Project Overview

Employee Management System is a web application built using **React (Vite)** and **Tailwind CSS**. The application provides separate dashboards for **Admin** and **Employee** users after login.

The system allows the **Admin** to assign new tasks to employees, and employees can view and manage their assigned tasks from their own dashboard. All application data is stored using **Local Storage**, so no backend database is required.

---

## ✨ Features

- Secure Singup Interface
- Secure Login Interface
- Separate Admin Dashboard
- Separate Employee Dashboard
- Admin can assign new tasks to employees
- Employees can view their assigned tasks
- Task status management (New, Active, Completed, Failed)
- Local Storage for data persistence
- Responsive User Interface
- Fast development with Vite

---

## 🛠️ Technologies Used

- React.js
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- HTML5
- CSS3
- Local Storage

---

## 🚀 How It Works

1. The application starts with a **Login Form** If don't have account you can go **Signup Form**.
2. Users can log in as either:
   - **Admin**
   - **Employee**
3. After successful login:
   - The **Admin** is redirected to the **Admin Dashboard**.
   - The **Employee** is redirected to the **Employee Dashboard**.
4. The **Admin** can assign new tasks to any employee.
5. Assigned tasks are stored in **Local Storage**.
6. Employees can log in to their dashboard and view all tasks assigned to them.
7. Employees can update the status of their tasks (such as Active, Completed, or Failed).

---

## 📂 Project Structure

```
src/
│
├── components/
├── pages/
├── lib/
├── App.jsx
└── main.jsx
```

---

## ▶️ Getting Started

### Clone the repository

```bash
git clone https://github.com/abrar-khan-developer/EMS.git
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

---

## 📚 Learning Source

This project was developed for learning purposes by following the tutorial below:

https://youtu.be/TTx7Y3a7EmA?si=JO_Uc-F19axeJ5Zv

---

## 🎯 Purpose

This project was built to practice and improve skills in:

- Vite.js
- Component-Based Architecture
- State Management
- Tailwind CSS
- Local Storage
- Authentication Flow
- Dashboard Development
- Task Management System

---

## 📄 License

This project is created for educational and learning purposes.