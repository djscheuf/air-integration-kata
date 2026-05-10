# Event Stream API

A simple Express JS API that tracks user events by session.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Get Events for a Session
```
GET /events/{sessionId}
```

Returns an array of events for the specified session.

**Example:**
```bash
curl http://localhost:3000/events/session-123
```

**Response:**
```json
[
  {
    "eventType": "VIEW",
    "timestamp": 1620000000,
    "sessionId": "session-123",
    "properties": {
      "productId": "prod-456",
      "category": "electronics"
    }
  },
  ...
]
```

### Health Check
```
GET /health
```

Returns API status.

## Event Structure

Each event contains:
- `eventType` (string): Type of event (VIEW, ADD_TO_CART, REMOVE_FROM_CART, PURCHASE, etc.)
- `timestamp` (number): Unix timestamp of when the event occurred
- `sessionId` (string): Session identifier
- `properties` (object): Event-specific details

## Sample Data

Sample events are stored in `data/events.json` with test sessions:
- `session-123`: Contains VIEW, ADD_TO_CART, and PURCHASE events
- `session-456`: Contains VIEW, ADD_TO_CART, and REMOVE_FROM_CART events
