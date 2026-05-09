# Event Stream API

## Description
Tracks user events by session. Returns a stream of events that occurred within a specific session, including event type, timing, and event-specific properties. This API does not provide user identification—only session-level data.

## API Contract

### Endpoint
```
GET /events/{sessionId}
```

### Request Parameters
- `sessionId` (string, required): The session identifier to retrieve events for

### Response
Returns an array of event objects with the following structure:

```typescript
interface Event {
  eventType: EventType;        // Enum of possible event types
  timestamp: number;           // Timing/timestamp of the event
  sessionId: string;           // Session identifier
  properties: Record<string, any>;  // Event-specific details/properties
}

enum EventType {
  // Specific event types to be defined
  // Examples: VIEW, ADD_TO_CART, REMOVE_FROM_CART, PURCHASE, etc.
}
```

### Key Characteristics
- **Session-scoped**: Returns events for a single session only
- **No user identification**: Does not include user ID in the response
- **Chronologically ordered**: Events include timing information
- **Event details**: Each event includes type-specific properties
- **Stateless**: Provides raw event stream without aggregation

### Example Response
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
  {
    "eventType": "ADD_TO_CART",
    "timestamp": 1620000030,
    "sessionId": "session-123",
    "properties": {
      "productId": "prod-456",
      "quantity": 1
    }
  }
]
```
