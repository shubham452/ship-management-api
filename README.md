---

# 🚢 Ship Management API

A **RESTful API** built with **Node.js, Express, MongoDB, and JWT authentication** to manage ships.
This project demonstrates **user authentication, CRUD operations, and route protection**.

---

## 📌 Features

* User **registration & login** with **JWT authentication**
* Secure protected routes using middleware
* **Ship management CRUD**:

  * Create Ship
  * Get all Ships
  * Get Ship by ID
  * Update Ship
  * Delete Ship
* Validation for unique fields (`imoNumber`, `email`, `username`)
* Proper error handling with meaningful responses

---

## 🛠️ Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB, Mongoose
* **Authentication**: JWT (JSON Web Token)
* **Other**: bcrypt.js (password hashing), dotenv

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd ship-management-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the project root:

```
MONGO_URI=mongodb://localhost:27017/shipdb
JWT_SECRET=your_secret_key
PORT=5000
```

### 4. Start the Server

```bash
npm start
```

or (if nodemon is installed):

```bash
npm run dev
```

The API will start on:
👉 `http://localhost:5000`

---

## 📬 API Endpoints

### 🔑 Authentication

#### Register User

`POST /auth/register`

```json
{
  "username": "shubham",
  "email": "shubham@example.com",
  "password": "123456"
}
```

#### Login User

`POST /auth/login`

```json
{
  "email": "shubham@example.com",
  "password": "123456"
}
```

**Response**

```json
{
  "token": "your-jwt-token"
}
```

---

### 🚢 Ship Management (Protected Routes → require JWT)

#### Get All Ships

`GET /ships/getAllShips`

#### Get Ship by ID

`GET /ships/getShip/:id`

#### Create Ship

`POST /ships/createShip`

```json
{
  "imoNumber": "9387421",
  "name": "Evergreen Explorer",
  "type": "Container Ship",
  "flag": "Panama",
  "yearBuilt": 2010,
  "grossTonnage": 98000,
  "deadweight": 120000,
  "capacityTEU": 8500,
  "status": "Active"
}
```

#### Update Ship

`PUT /ships/updateShip/:id`

```json
{
  "name": "Evergreen Explorer II",
  "status": "Maintenance"
}
```

#### Delete Ship

`DELETE /ships/deleteShip/:id`

---

## 🧪 Testing with Postman

1. Import the provided **Postman collection**:
   `ShipManagementAPI.postman_collection.json`

2. **Steps:**

   * Register a user → Login → Copy token
   * Add `Authorization: Bearer <your-token>` in headers for all ship routes

---

## 📂 Project Structure

```
ship-management-api/
│── config/
│   └── db.js          # MongoDB connection
│── controllers/
│   ├── authController.js
│   └── shipController.js
│── middleware/
│   └── authMiddleware.js
│── models/
│   ├── userModel.js
│   └── shipModel.js
│── routes/
│   ├── authRoutes.js
│   └── shipRoutes.js
│── .env
│── server.js
│── package.json
│── README.md
```

---

## ⚡ Dependencies

```json
"dependencies": {
  "bcryptjs": "^2.4.3",
  "dotenv": "^16.0.3",
  "express": "^4.18.2",
  "jsonwebtoken": "^9.0.0",
  "mongoose": "^7.0.4"
}
```

---

## ✅ Submission Checklist

* [x] Working REST API with MongoDB
* [x] JWT Authentication
* [x] CRUD for ships
* [x] Postman Collection (`ShipManagementAPI.postman_collection.json`)
* [x] README with setup instructions

---

## 👨‍💻 Author

**Shubham Kumar**
🚀 Passionate about building full-stack applications with MERN

---

Shubham, do you want me to also **write the Postman collection `.json` file for you** (with all 7 endpoints already set up), so you can just attach it with this README for submission?
