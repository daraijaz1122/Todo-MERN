# Todo App (MERN stack)

- A simple Todo application built using the MERN Stack. This app allows users to create , read, update and delete their todos

# Features

- Create a new todo
- View all todos.
- Update a todo(mark completed)
- Delete a todo

# Tech Stack

- Frontend: React
- Backend: Node.js,Express.js
- Database: MongoDB
- UI Framework: Tailwind CSS
- Bundler: Vite

# Getting Started

- Prerequisites
- Node.js installed on your machine
- MongoDB installed on your machine

# Installation

1. Clone the repository

- git clone https://github.com/daraijaz1122/todo-Mern.git
- cd todo

2. Install dependencies

- For the backend:
- cd backend
- npm install
- For the frontend:
- cd todo-frontend
- npm install

3. set up Environment variables

- Create a .env file in the backend/ directory:
- DATABASE_URL="Your mongodb connection string"

# Running the app

1. Start the backend server:

- navigate to the backend/ directory and run:
- npx nodemon index.js
- this will start the backend server on (http://localhost:3000)

2. Start the frontend development server:

- navigate to the todo-frontend/ directory and run:
- npm run dev
- this will start the frontend on (http://localhost:5173)

3. Visit http://localhost:5173 in your browser to interact with the Todo app
