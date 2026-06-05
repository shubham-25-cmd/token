# API Testing Guide

## Fixed Issues
✅ Fixed ES6/CommonJS module inconsistencies
✅ Fixed file naming mismatches (auth.controller → auth.controllers)
✅ Fixed model import paths (user.model → user.models)
✅ Fixed typos in function names (getAcessTokenController → getAccessTokenController)
✅ Fixed cookie parameter case sensitivity (refreshtoken → refreshToken)
✅ Fixed incomplete getAccessTokenController function
✅ Fixed loginService to throw errors instead of returning res
✅ Added MONGO_URI to .env file
✅ Fixed error messages and response handling

## API Endpoints

### 1. Register User
**Endpoint:** `POST /api/auth/register`
**Method:** POST
**Headers:** `Content-Type: application/json`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "message": "user registered successfully",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "refreshToken": "jwt_token",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "accessToken": "jwt_access_token"
}
```

**Error Response (409):**
```json
{
  "message": "User already exists with this email"
}
```

**Error Response (400):**
```json
{
  "message": "all fields are required"
}
```

### 2. Login User
**Endpoint:** `POST /api/auth/login`
**Method:** POST
**Headers:** `Content-Type: application/json`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
  "message": "user logged in successfully",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "refreshToken": "jwt_token",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "accessToken": "jwt_access_token"
}
```

**Error Response (401):**
```json
{
  "message": "Invalid credentials"
}
```

### 3. Get Access Token
**Endpoint:** `GET /api/auth/get-accessToken`
**Method:** GET
**Headers:** `Cookie: refreshToken=<jwt_refresh_token>`

**Success Response (200):**
```json
{
  "message": "Access token generated successfully",
  "accessToken": "new_jwt_access_token"
}
```

**Error Response (401):**
```json
{
  "message": "unauthorized access"
}
```

### 4. Get Current User
**Endpoint:** `GET /api/auth/me`
**Method:** GET
**Headers:** `Cookie: accessToken=<jwt_access_token>`

**Success Response (200):**
```json
{
  "message": "Currently loggedIn user",
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "refreshToken": "jwt_token",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Response (401):**
```json
{
  "message": "Unauthorized request"
}
```

### 5. Home Route
**Endpoint:** `GET /api/home`
**Method:** GET
**Headers:** `Cookie: accessToken=<jwt_access_token>`

**Success Response (200):**
```json
{
  "message": "Home fetched"
}
```

**Error Response (401):**
```json
{
  "message": "Unauthorized request"
}
```

## Testing with cURL

### Setup: Install and Start MongoDB
```bash
# Start MongoDB locally (if installed)
mongod
```

### Register
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}' \
  -c cookies.txt
```

### Get Current User (with authentication)
```bash
curl -X GET http://localhost:3000/api/auth/me \
  -b cookies.txt
```

### Get Access Token (refresh)
```bash
curl -X GET http://localhost:3000/api/auth/get-accessToken \
  -b cookies.txt
```

### Access Home Route
```bash
curl -X GET http://localhost:3000/api/home \
  -b cookies.txt
```

## Testing with Thunder Client or Postman

1. **Register**: POST to `http://localhost:3000/api/auth/register`
2. **Login**: POST to `http://localhost:3000/api/auth/login` - Cookies will be automatically set
3. **Get Current User**: GET to `http://localhost:3000/api/auth/me` - Uses cookies from login
4. **Get Access Token**: GET to `http://localhost:3000/api/auth/get-accessToken` - Refreshes access token
5. **Home**: GET to `http://localhost:3000/api/home` - Requires authentication

## Token Details

**Access Token:**
- Expires in: 1 minute
- Used for: Authenticating protected routes
- Stored in: Cookie (httpOnly)

**Refresh Token:**
- Expires in: 1 day
- Used for: Getting new access tokens when expired
- Stored in: Cookie (httpOnly) and User document

## Files Fixed

1. ✅ `src/controllers/auth.controllers.js` - Fixed ES6 imports, typos, and incomplete function
2. ✅ `src/middleware/auth.middleware.js` - Fixed model import path
3. ✅ `src/config/db.js` - Fixed ES6 exports to CommonJS
4. ✅ `src/services/auth.service.js` - Fixed loginService error handling
5. ✅ `src/routes/auth.routes.js` - Fixed controller import path
6. ✅ `.env` - Added MONGO_URI configuration

All issues are now fixed and the API is ready for testing with a running MongoDB instance.
