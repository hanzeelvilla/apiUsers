# API Documentation

## Overview
This API provides endpoints to manage users. You can create, update, retrieve, and delete user records.

## Prerequisites
1. Node.js: Ensure you have **Node.js** installed. Download Node.js

2. MySQL: Ensure you have **MySQL** installed and running. Download MySQL

3. Environment Variables: Create a **.env** file in the root of your project and add the following variables:

```
PORT=8000
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
```
## Installation
1. Clone the Repository
```
git clone https://github.com/hanzeelvilla/apiUsers.git
```

2. Navigate to the Project Directory
```
cd apiUsers
```

3. Install Dependencies
```
npm install
```

4. Create the db in MySql
```
create database DB_NAME;
```

## Running the API

1. Start the Server
```
npm start
```

2. Sync the Database

The API **automatically** syncs the database schema when it starts. This creates the necessary tables in your MySQL database.

## ENDPOINTS
- **GET** /api: *Returns a welcome message.*

- **GET** /api/users: *Retrieves a list of all users.*

- **GET** /api/users/:id: *Retrieves a specific user by ID.*

- **POST** /api/users: *Creates a new user.*

## Test the API
You can use the test_endpoints file if you have installed the extension REST Client from Visual Studio Code. Or try it out with tools like Postman or curl.

## Using REST Client in Visual Studio Code
1. Install REST Client Extension:
- Open Visual Studio Code.
- Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing Ctrl+Shift+X.
- Search for "REST Client" and install it.

2. Open test_endpoints.http File:
- Navigate to the test_endpoints.http file in your project.
- This file contains predefined HTTP requests to test your API.

3. Send Requests:
- Click on the "Send Request" link that appears above each request in the test_endpoints.http file to test the API endpoints.