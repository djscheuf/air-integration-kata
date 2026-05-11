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

### 1. List All Users
```
GET /users
```

Returns a list of all users in the system.

**Example:**
```bash
curl http://localhost:3001/users
```

**Response:**
```json
{
  "users": ["Alice", "Bob", "Charlie", "Diane", "Eve", "Frank", "Grace", "Henry", "Iris", "Jack", "Karen", "Leo", "Mia", "Noah", "Olivia", "Paul", "Quinn", "Rachel", "Sam", "Tina", "Uma", "Victor", "Walter", "Xander", "Yara"]
}
```

---

### 2. Get User ID from Session
```
GET /users/session/{sessionId}
```

Returns the user ID associated with a session.

**Example:**
```bash
curl http://localhost:3001/users/session/session-123
```

### 3. Get All Sessions for a User
```
GET /users/{userId}/sessions
```

Returns all session IDs associated with a user.

**Example:**
```bash
curl http://localhost:3001/users/Alice/sessions
```

### 4. Get Cart History for a User
```
GET /users/{userId}/cart
```

Returns the complete cart history for a user.

**Example:**
```bash
curl http://localhost:3001/users/Alice/cart
```

### 5. Get Cart State at Specific Time
```
GET /users/{userId}/cart?timestamp={timestamp}
```

Returns the cart state at a specific Unix timestamp.

**Example:**
```bash
curl http://localhost:3001/users/Alice/cart?timestamp=1620000060
```

## Sample Data

The API includes sample data for testing:

- **Users:** Alice, Bob, Charlie, Diane, Eve, Frank, Grace, Henry, Iris, Jack, Karen, Leo, Mia, Noah, Olivia, Paul, Quinn, Rachel, Sam, Tina, Uma, Victor, Walter, Xander, Yara (25 users total)
- **Sessions:** session-001 through session-025 (25 sessions, one per user)
- **Cart History:** Available for all users except Walter (who has an empty cart history)

## Project Structure

- `server.js` - Express server setup
- `routes.js` - API route handlers
- `db.js` - In-memory data storage
- `package.json` - Project dependencies
