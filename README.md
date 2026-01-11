A RESTful API built using Node.js and Express.js that allows users to register, authenticate, manage their news preferences, and fetch personalized news from an external API.
The project demonstrates real-world backend concepts like JWT authentication, password hashing, middleware, external API integration, and automated testing.

 Features

User registration and login

Secure authentication using JWT

Password hashing with bcrypt

Protected routes using authentication middleware

User preference management (GET & PUT)

Personalized news fetching via external News API

Clean project architecture (controllers, routes, services)


 Tech Stack

Node.js

Express.js

JWT (jsonwebtoken)

bcrypt

axios


📁 Project Structure
news-aggregator-api/
│
├── controller/
│   ├── authController.js
│   ├── userController.js
│   └── newsController.js
│
├── routes/
│   ├── userRoutes.js
│   └── newsRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── services/
│   └── newsService.js
│
├── models/
│   └── user.js
│
├── config/
│   └── jwtConfig.js
│
├── test/
│   └── server.test.js
│
├── app.js
├── .env
├── package.json
└── README.md

 Authentication Flow

User registers using /users/signup

Password is hashed using bcrypt

User logs in using /users/login

Token is sent in the Authorization header for protected routes

Middleware validates token and attaches user info to req.user

📌 API Endpoints
🔹 users
Signup
POST /users/signup


Body

{
    "name": "abhinav",
    "email": "abhi@gmail.com",
    "password": "abc",
    "preferences":["movies", "comics"]
}

Login
POST /users/login


Body

{
  "email": "abhi@gmail.com",
  "password": "password123"
}


Response

{
    "success": true,
    "token": "<JWT_TOKEN>"
}

🔹 User Preferences (Protected)
Get Preferences
GET /users/preferences


Headers

Authorization: Bearer <JWT_TOKEN>


Response

{
    "preferences": [
        "movies",
        "comics",
        "games"
    ]
}

Update Preferences
PUT /users/preferences


Headers

Authorization: Bearer <JWT_TOKEN>


Body

{"message":"Preferences updated successfully","preferences":["movies","comics","games"]}

🔹 News (Protected)
GET /news


Fetches news using an external News API.

🌍 External API Integration

Uses axios to fetch news from a third-party News API

API key stored securely in .env

🧪 Running Tests

This project uses tap for automated testing.

Run all tests:
npm test

Test Output Example:
Asserts: 15 pass, 0 fail
Suites: 1 pass, 0 fail

▶️ Running the Server
Install dependencies
npm install

Start server
npm run dev


Server runs on:

http://localhost:3000

⚙️ Environment Variables

Create a .env file in the root directory:

PORT=3000
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1h
NEWS_API_KEY=your_news_api_key

🧠 Key Concepts Demonstrated

Stateless authentication using JWT

Middleware-based request validation

Secure password storage

RESTful API design

Separation of concerns

Test-driven backend development


👨‍💻 Author

Abhinav
Backend Developer (Node.js)
