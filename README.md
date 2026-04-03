💰 Finance Data Processing and Access Control Backend

📌 Project Overview

This project is a RESTful backend system for a finance dashboard designed with scalable architecture and role-based access control. It manages users, roles, and financial records while providing secure APIs for data access and analytics.

The system demonstrates backend concepts such as API design, authentication, role-based access control, and data processing.



🚀 Features

👤 User & Role Management

* User registration and login
* Role-based access control (RBAC)
* Roles:

  * Viewer (read-only)
  * Analyst (view + analytics)
  * Admin (full access)
* User activation status



🔐 Authentication

* JWT-based authentication
* Password hashing using bcrypt



💰 Financial Records Management

* Create records
* View records
* Update records
* Delete records
* Filter by type and category



📊 Dashboard APIs

* Total Income
* Total Expense
* Net Balance
* Summary analytics



🛡️ Access Control

* Middleware-based role restriction
* Admin → full access
* Analyst → read + analytics
* Viewer → read-only



🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JSON Web Token (JWT)
* bcryptjs



📁 Project Structure

finance-backend/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── app.js
│── server.js


⚙️ Setup Instructions

1. Clone the repository
   git clone https://github.com/Sharly16/finance-backend-zorvyn.git

2. Navigate to project folder
   cd finance-backend-zorvyn

3. Install dependencies
   npm install

4. Create `.env` file

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

5. Run the server
   npx nodemon server.js

Server runs at:
http://localhost:5000



📡 API Endpoints

🔐 Auth

POST /api/auth/register
POST /api/auth/login

👥 Users (Admin only)

GET /api/users
PUT /api/users/:id

💰 Records

POST /api/records
GET /api/records
PUT /api/records/:id
DELETE /api/records/:id

📊 Dashboard

GET /api/dashboard



🔑 Authentication

Include token in headers:

Authorization: <your_token>



🧪 Example Request

POST /api/records

{
"amount": 5000,
"type": "income",
"category": "Salary",
"note": "April Salary"
}



📸 Screenshots

Register User

![Register](screenshots/01-register-user.png)

Login

![Login](screenshots/02-login-token.png)

Create Record

![Create Record](screenshots/03-create-record.png)

Dashboard Summary

![Dashboard](screenshots/04-dashboard-summary.png)

Project Structure

![Structure](screenshots/06-project-structure.png)


🧠 Assumptions

* Simplified role model
* JWT without refresh tokens
* Basic validation implemented
* MongoDB Atlas used for database



📌 Future Improvements

* Pagination
* Advanced filtering
* Swagger API documentation
* Unit testing
* Deployment



🎯 Conclusion

This project demonstrates backend development skills including API design, authentication, role-based access control, and financial data processing in a clean and maintainable architecture.
