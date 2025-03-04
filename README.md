# Learning Management System (LMS)

## 📌 Project Overview
This **Learning Management System (LMS)** is a full-stack web application that allows educators to create and manage courses while enabling students to browse, enroll in, and track their learning progress. The platform supports authentication, secure payments, course management, and role-based access control.

## 🚀 Features
- **Student Features**
  - Browse and search for courses
  - Enroll in courses and track progress
  - Watch course videos and access learning materials
  - View course ratings and reviews

- **Educator Features**
  - Create and manage courses with videos and resources
  - Track student enrollments and progress
  - Manage course earnings and payments

- **Admin Features**
  - Manage users and course content
  - Handle payment processing and system configurations

## 🛠️ Tech Stack
### Frontend (Client)
- **React (Vite)** – Fast and modern UI development
- **Tailwind CSS** – Utility-first styling framework
- **React Router** – Page navigation

### Backend (Server)
- **Node.js & Express** – API and server logic
- **MongoDB & Mongoose** – Database management
- **Cloudinary & Multer** – File uploads (videos, images)
- **Clerk** – Secure login and access control

## ⚙️ Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **MongoDB** (local or cloud-based like MongoDB Atlas)
- **Vite** (for React development)

### Steps to Run Locally
#### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/LMS-main.git
cd LMS-main
```
#### 2️⃣ Install Dependencies
```sh
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```
#### 3️⃣ Set Up Environment Variables
Create a `.env` file inside the **server** directory with the following:
```env
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

#### 4️⃣ Run the Application
```sh
# Start the server
cd server
npm start

# Start the frontend
cd ../client
npm run dev
```
The app should now be running at **http://localhost:5173/** (or another Vite-assigned port).

## 🔥 API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/users/register` | POST | Register a new user |
| `/api/users/login` | POST | Authenticate user |
| `/api/courses` | GET | Get all courses |
| `/api/courses/:id` | GET | Get course details |
| `/api/courses/create` | POST | Create a new course (educators) |
| `/api/enroll` | POST | Enroll in a course |

## 📜 License
This project is **open-source** and available under the [MIT License](LICENSE).# Learning Management System (LMS)

## 📌 Project Overview
This **Learning Management System (LMS)** is a full-stack web application that allows educators to create and manage courses while enabling students to browse, enroll in, and track their learning progress. The platform supports authentication, secure payments, course management, and role-based access control.

## 🚀 Features
- **Student Features**
  - Browse and search for courses
  - Enroll in courses and track progress
  - Watch course videos and access learning materials
  - View course ratings and reviews

- **Educator Features**
  - Create and manage courses with videos and resources
  - Track student enrollments and progress
  - Manage course earnings and payments

- **Admin Features**
  - Manage users and course content
  - Handle payment processing and system configurations

## 🛠️ Tech Stack
### Frontend (Client)
- **React (Vite)** – Fast and modern UI development
- **Tailwind CSS** – Utility-first styling framework
- **React Router** – Page navigation

### Backend (Server)
- **Node.js & Express** – API and server logic
- **MongoDB & Mongoose** – Database management
- **Cloudinary & Multer** – File uploads (videos, images)
- **Clerk** – Secure login and access control

## ⚙️ Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+ recommended)
- **MongoDB** (local or cloud-based like MongoDB Atlas)
- **Vite** (for React development)

### Steps to Run Locally
#### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/LMS-main.git
cd LMS-main
```
#### 2️⃣ Install Dependencies
```sh
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```
#### 3️⃣ Set Up Environment Variables
Create a `.env` file inside the **server** directory with the following:
```env
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

#### 4️⃣ Run the Application
```sh
# Start the server
cd server
npm start

# Start the frontend
cd ../client
npm run dev
```
The app should now be running at **http://localhost:5173/** (or another Vite-assigned port).

## 🔥 API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/users/register` | POST | Register a new user |
| `/api/users/login` | POST | Authenticate user |
| `/api/courses` | GET | Get all courses |
| `/api/courses/:id` | GET | Get course details |
| `/api/courses/create` | POST | Create a new course (educators) |
| `/api/enroll` | POST | Enroll in a course |

## 📜 License
This project is **open-source** and available under the [MIT License](LICENSE).
