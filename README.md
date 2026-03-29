# FOREVER - Clothing E-Commerce Platform (MERN)

A production-ready full-stack E-Commerce platform built using the MERN stack with scalable architecture, JWT authentication, cloud-based media storage, and modular backend design.

---

# Live Demo

Frontend (User Website):  
https://forever-clothing-e-commerce-platform-li17.onrender.com/

Admin Panel:  
https://forever-clothing-e-commerce-platform-sfgd.onrender.com/

---

# Sample Credentials

User Login  
Email: user1@gmail.com  
Password: user1123  

---

# Tech Stack

- MongoDB (Database)
- Express.js (Backend Framework)
- React.js (Frontend Library)
- Node.js (Runtime Environment)
- JWT (Authentication)
- Cloudinary (Media Storage)

---

# Screenshots

## Home Page
![Home1](./screenshots/Screenshot%202026-03-29%20110149.png)
![Home2](./screenshots/Screenshot%202026-03-29%20110212.png)
![Home3](./screenshots/Screenshot%202026-03-29%20110227.png)
![Home4](./screenshots/Screenshot%202026-03-29%20110249.png)

## Collections Page
![Collection1](./screenshots/Screenshot%202026-03-29%20110302.png)
![Collection2](./screenshots/Screenshot%202026-03-29%20110331.png)
![Collection3](./screenshots/Screenshot%202026-03-29%20110416.png)

## Cart Page
![Cart](./screenshots/Screenshot%202026-03-29%20110530.png)

## Place Order - Cash On Delivery
![COD](./screenshots/Screenshot%202026-03-29%20110902.png)

## Orders Page
![Orders](./screenshots/Screenshot%202026-03-29%20111011.png)

## Place Order - Stripe
![Stripe](./screenshots/Screenshot%202026-03-29%20111432.png)

---

# System Design Overview

This project is designed following scalable full-stack architecture principles with clear separation between presentation, business logic, and data layers.

## Core Design Goals

- Clear separation of concerns  
- Stateless authentication  
- Scalable database structure  
- Cloud-based media handling  
- Role-based access control  
- Modular backend architecture  

---

# High-Level Architecture

```mermaid
flowchart TD

    Client[Client Browser]
    Admin[Admin Panel]
    FE[Frontend - React]
    BE[Backend - Node & Express]
    DB[(MongoDB Atlas)]
    Cloud[(Cloudinary Storage)]
    Auth[JWT Auth Layer]

    Client --> FE
    Admin --> FE
    FE -->|REST API Calls| BE
    BE -->|Queries| DB
    BE -->|Image Uploads| Cloud
    BE -->|Token Generation & Validation| Auth
```

---

# Architecture Explanation

## Frontend Layer (React)

- Handles UI rendering and routing  
- Maintains client-side state  
- Sends REST API requests  
- Stores JWT token securely  
- Implements protected routes  

---

## Backend Layer (Node.js + Express)

- Implements RESTful APIs  
- Handles business logic  
- Generates & validates JWT tokens  
- Role-based middleware protection  
- Integrates Cloudinary for media uploads  
- Structured error handling  

---

## Database Layer (MongoDB Atlas)

- NoSQL document-based storage  
- Flexible schema design  
- Indexed queries for performance  

Collections:
- Users  
- Products  
- Orders  

---

## Cloud Storage

- Product images stored in Cloudinary  
- Only image URLs saved in database  
- Reduces backend storage load  
- Improves scalability  

---

## Authentication Strategy

- JWT-based stateless authentication  
- Token generated at login  
- Sent in Authorization headers  
- Middleware validates token  
- Admin routes validate role before access  

---

# Database Design (ER Diagram)

```mermaid
erDiagram

    USER {
        string _id
        string name
        string email
        string password
        string role
    }

    PRODUCT {
        string _id
        string name
        string description
        number price
        string category
        number stock
        string imageUrl
    }

    ORDER {
        string _id
        string userId
        array products
        number totalAmount
        string status
        date createdAt
    }

    USER ||--o{ ORDER : places
    PRODUCT ||--o{ ORDER : included_in
```

---

# Application Flow

## User Shopping Flow

```mermaid
flowchart LR
    Home --> BrowseProducts
    BrowseProducts --> ProductDetails
    ProductDetails --> AddToCart
    AddToCart --> Cart
    Cart --> Checkout
    Checkout --> OrderPlaced
```

---

## Authentication Flow

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Database

    User->>Frontend: Login Credentials
    Frontend->>Backend: POST /login
    Backend->>Database: Validate User
    Database-->>Backend: Success
    Backend-->>Frontend: JWT Token
    Frontend-->>User: Access Granted
```

---

# Project Structure

```
Forever-Clothing/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── assets/
│   └── App.js
│
└── README.md
```

---

# Environment Setup

## Backend `.env`

```
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
```

---

# Installation

```bash
git clone https://github.com/bvlchowdary2006-alt/Forever-Clothing-E-Commerce-Platform-using-MERN.git
cd Forever-Clothing-E-Commerce-Platform-using-MERN
```

### Install Backend

```bash
cd backend
npm install
npm run dev
```

### Install Frontend

```bash
cd frontend
npm install
npm start
```

---

# Security Implementation

- Password hashing using Bcrypt  
- JWT token validation middleware  
- Role-based route protection  
- Environment variable protection  
- API input validation  

---

# Scalability Considerations

- Stateless authentication  
- Cloud-based image hosting  
- Modular backend structure  
- Ready for payment gateway integration  
- Redis caching can be added  
- Easily migratable to microservices  

---

# Why This Project Stands Out

- Clean layered architecture  
- Interview-ready system design explanation  
- Production-like implementation  
- Real-world e-commerce logic  
- Scalable backend foundation  
