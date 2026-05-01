# ElectroHub - Premium Electronics E-Commerce

A full-stack MERN (MongoDB, Express, React, Node.js) e-commerce application.

## Features
- ✨ Premium design with modern UI
- 📱 Fully responsive for all devices
- 🛒 Cart and Wishlist functionality
- 🔐 Secure JWT Authentication
- 📦 Order management
- 🛠️ Admin dashboard for products

## Prerequisites
- Node.js installed
- MongoDB Atlas account (or local MongoDB)

## Setup Instructions

### 1. Backend Setup
Go to the `backend` directory:
```bash
cd backend
```
Install dependencies:
```bash
npm install
```
Configure environment variables in `.env`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
Seed the database (required for products to show):
```bash
node seed.js
```
Start the backend server:
```bash
npm run dev
```

### 2. Frontend Setup
Go to the `frontend` directory:
```bash
cd frontend
```
Install dependencies:
```bash
npm install
```
Configure environment variables in `.env`:
```env
VITE_API_URL=http://localhost:5000
```
Start the frontend development server:
```bash
npm run dev
```

## Troubleshooting
- **Products not showing?** Ensure the backend is running and you have run `node seed.js`. Check that `VITE_API_URL` in `frontend/.env` matches your backend URL.
- **MongoDB Connection issues?** If you see DNS errors, use the "Standard Connection String" in MongoDB Atlas (Node.js 2.2.12 or later format).

## Login Credentials (after seeding)
- **Admin**: `admin@electrohub.com` / `admin123`
- **User**: Register a new account or check seeded users.
