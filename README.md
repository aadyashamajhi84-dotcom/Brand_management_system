# Brand_management_system
 complete D2C brand onboarding backend system with status workflow and notes
Here’s a ready-to-use **README.md** for your project.

# D2C Brand Onboarding & Tracking System

Internal admin tool to review brand applications, track evaluation status, add internal notes, and monitor pipeline health.

Built as per the task requirements in the provided PDF .


## 🚀 Technologies Used

| Technology              | Purpose               |
| ----------------------- | --------------------- |
| **Node.js**             | Backend runtime       |
| **Express**             | REST API & routing    |
| **MongoDB**             | Database              |
| **Mongoose**            | Schema & models       |
| **dotenv**              | Environment variables |
| HTML / CSS / JavaScript | Frontend dashboard    |


## 📁 Project Structure

Here’s a clean **Project Structure** section you can paste directly into your `README.md`.

---

## 📁 Project Structure

```
d2c-admin-tool/
├── config/
│   └── database.js          # Establishes MongoDB connection using Mongoose
│
├── controllers/
│   ├── brandController.js  # Business logic for brands (create, list, status, summary)
│   └── noteController.js   # Logic for adding notes to brands
│
├── middleware/
│   └── validator.js        # Request validation for brands and notes
│
├── models/
│   ├── Brand.js            # Brand schema with status flow and timestamps
│   └── Note.js             # Note schema linked to a brand
│
├── routes/
│   └── api.js              # All API endpoint definitions
│
├── frontend/
│   ├── index.html          # Admin dashboard UI
│   ├── styles.css          # Dashboard styling
│   └── script.js           # Frontend logic & API calls
│
├── .env                    # Environment variables (Mongo URI, Port)
└── server.js               # Application entry point (Express server)
```

---

### 🧩 Folder Responsibilities

| Folder/File    | Responsibility                                       |
| -------------- | ---------------------------------------------------- |
| `server.js`    | Starts server, connects DB, serves frontend and APIs |
| `config/`      | Database connection setup                            |
| `models/`      | Mongoose schemas representing database collections   |
| `controllers/` | Core application logic                               |
| `routes/`      | Maps URLs to controllers                             |
| `middleware/`  | Validations before hitting controllers               |
| `frontend/`    | Dashboard UI connected to backend APIs               |
| `.env`         | Configuration without hardcoding secrets             |















## ⚙️ Features Implemented

### ✅ Brand Application API

* Create brand with validations
* Default status = `SUBMITTED`
* Auto timestamps

### ✅ Get Brands with Filters

* Filter by `status`
* Filter by `category`

### ✅ Get Single Brand

* Returns brand + all notes

### ✅ Strict Status Management (Critical)

Allowed flow:

```
SUBMITTED → UNDER_REVIEW → SHORTLISTED → ACCEPTED / REJECTED
```

Rules enforced:

* Cannot skip steps
* Cannot go backward
* ACCEPTED / REJECTED are final

### ✅ Notes System

* Add internal notes to brands
* Notes linked via brand_id

### ✅ Dashboard Summary

Returns counts of brands by status.

### ✅ Professional Frontend Dashboard

* Create brands
* View brands
* Move status forward
* Live API integration

---

## 🔐 Environment Variables (`.env`)

```env
MONGO_URI=mongodb://localhost:27017/d2c_admin
PORT=5000
```

---

## ▶️ How to Run the Project

### 1️⃣ Install dependencies

```bash
npm install express mongoose dotenv
```

### 2️⃣ Start MongoDB

Make sure MongoDB is running locally on port **27017**.

```bash
sudo systemctl start mongodb
```

Or use MongoDB Atlas and update `MONGO_URI`.

### 3️⃣ Run the server

From the folder where `server.js` exists:

```bash
node server.js
```

You should see:

```
MongoDB Connected
Server running on port 5000
```

### 4️⃣ Open the Dashboard

Open in browser:

```
http://localhost:5000
```

Frontend and backend run together on the same server.

---

## 🔗 API Endpoints

| Method | Endpoint                 | Description                     |
| ------ | ------------------------ | ------------------------------- |
| POST   | `/api/brands`            | Create brand                    |
| GET    | `/api/brands`            | List brands (filters supported) |
| GET    | `/api/brands/summary`    | Dashboard summary               |
| GET    | `/api/brands/:id`        | Get single brand + notes        |
| PATCH  | `/api/brands/:id/status` | Update brand status             |
| POST   | `/api/brands/:id/notes`  | Add note                        |

---

## 🧠 Architecture Flow

```
Frontend (HTML/JS)
        ↓
Express Routes
        ↓
Controllers
        ↓
Mongoose Models
        ↓
MongoDB
```

---

## ✅ Task Requirements Coverage

All rules from the task PDF are fully implemented :

* Validations
* Status flow enforcement
* Notes system
* Filters
* Summary dashboard
* Proper MVC structure

---

## 👨‍💻 Author

D2C Admin Tool for Brand Onboarding & Tracking System.
