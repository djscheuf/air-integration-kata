# Users and Sessions API

## Description
Maps sessions to users and provides user-scoped data including all sessions associated with a user and their cart history over time. This API bridges the gap between session-level events and user-level context, enabling user journey reconstruction.

## API Contract

### Endpoints

#### 1. Get User ID from Session
```
GET /users/session/{sessionId}
```

**Request Parameters**
- `sessionId` (string, required): The session identifier

**Response**
```typescript
interface SessionToUserResponse {
  userId: string;
  sessionId: string;
}
```

---

#### 2. Get All Sessions for a User
```
GET /users/{userId}/sessions
```

**Request Parameters**
- `userId` (string, required): The user identifier

**Response**
```typescript
interface UserSessionsResponse {
  userId: string;
  sessions: string[];  // Array of session IDs
}
```

---

#### 3. Get Cart History for a User
```
GET /users/{userId}/cart
```

**Request Parameters**
- `userId` (string, required): The user identifier

**Response**
```typescript
interface CartHistoryResponse {
  userId: string;
  cartHistory: CartSnapshot[];
}

interface CartSnapshot {
  timestamp: number;
  items: CartItem[];
  total: number;
}

interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}
```

---

#### 4. Get Cart State at Specific Time
```
GET /users/{userId}/cart?timestamp={timestamp}
```

**Request Parameters**
- `userId` (string, required): The user identifier
- `timestamp` (number, optional): Unix timestamp to retrieve cart state at that point in time

**Response**
```typescript
interface CartAtTimeResponse {
  userId: string;
  timestamp: number;
  items: CartItem[];
  total: number;
}
```

---

## Key Characteristics
- **User-scoped**: All endpoints operate at the user level
- **Session mapping**: Provides bidirectional mapping between sessions and users
- **Historical data**: Cart history includes state changes over time
- **Point-in-time queries**: Supports retrieving cart state at specific moments
- **Purchase tracking**: Cart history enables tracking of purchases and cart modifications

### Example Responses

**Session to User**
```json
{
  "userId": "user-789",
  "sessionId": "session-123"
}
```

**User Sessions**
```json
{
  "userId": "user-789",
  "sessions": ["session-123", "session-124", "session-125"]
}
```

**Cart History**
```json
{
  "userId": "user-789",
  "cartHistory": [
    {
      "timestamp": 1620000030,
      "items": [
        {
          "productId": "prod-456",
          "quantity": 1,
          "price": 29.99
        }
      ],
      "total": 29.99
    },
    {
      "timestamp": 1620000060,
      "items": [
        {
          "productId": "prod-456",
          "quantity": 1,
          "price": 29.99
        },
        {
          "productId": "prod-789",
          "quantity": 2,
          "price": 15.99
        }
      ],
      "total": 61.97
    }
  ]
}
```
