# Users and Sessions API

A simple Express.js API that maps sessions to users and provides user-scoped data including sessions and cart history.

## Installation

```bash
npm install
```

## Running the Server

```bash
npm start
```

The server will start on port 3001 (or the port specified by the `PORT` environment variable).

## API Endpoints

### 1. Get User ID from Session
```
GET /users/session/{sessionId}
```

Returns the user ID associated with a session.

**Example:**
```bash
curl http://localhost:3001/users/session/session-123
```

### 2. Get All Sessions for a User
```
GET /users/{userId}/sessions
```

Returns all session IDs associated with a user.

**Example:**
```bash
curl http://localhost:3001/users/user-789/sessions
```

### 3. Get Cart History for a User
```
GET /users/{userId}/cart
```

Returns the complete cart history for a user.

**Example:**
```bash
curl http://localhost:3001/users/user-789/cart
```

### 4. Get Cart State at Specific Time
```
GET /users/{userId}/cart?timestamp={timestamp}
```

Returns the cart state at a specific Unix timestamp.

**Example:**
```bash
curl http://localhost:3001/users/user-789/cart?timestamp=1620000060
```

## Sample Data

The API includes sample data for testing:

- **Users:** user-789, user-456, user-123
- **Sessions:** session-123, session-124, session-125, session-456, session-789
- **Cart History:** Available for user-789 and user-456

## Project Structure

- `server.js` - Express server setup
- `routes.js` - API route handlers
- `db.js` - In-memory data storage
- `package.json` - Project dependencies
