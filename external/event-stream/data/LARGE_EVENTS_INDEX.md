# Large Events Test Data Index

This document describes all 25 sessions in the `large-events.json` test dataset.

## Session Overview

| Session ID | Event Count | Event Types | Description |
|---|---|---|---|
| session-001 | 8 | VIEW, ADD_TO_CART, PURCHASE | Normal session with purchase. 4 views, 2 add-to-carts, 1 purchase. |
| session-002 | 7 | VIEW, ADD_TO_CART | No purchase. 6 views, 1 normal add-to-cart, 1 absurd quantity (500). |
| session-003 | 7 | VIEW, ADD_TO_CART, PURCHASE | Normal session with purchase. 4 views, 2 add-to-carts, 1 purchase. |
| session-004 | 7 | VIEW, ADD_TO_CART | No purchase. 5 views, 1 normal add-to-cart, 1 absurd quantity (1000). |
| session-005 | 9 | VIEW, ADD_TO_CART, PURCHASE | Normal session with purchase. 6 views, 2 add-to-carts, 1 purchase. **INVALID EVENT**: ADD_TO_CART with missing productId. |
| session-006 | 6 | VIEW, ADD_TO_CART | No purchase. 5 views, 1 normal add-to-cart, 1 absurd quantity (250). |
| session-007 | 10 | VIEW, ADD_TO_CART, PURCHASE | Normal session with purchase. 7 views, 2 add-to-carts, 1 purchase. **INVALID EVENT**: PURCHASE with far future timestamp (9999999999). |
| session-008 | 6 | VIEW, ADD_TO_CART | No purchase. 4 views, 1 normal add-to-cart, 1 absurd quantity (5000). |
| session-009 | 9 | VIEW, ADD_TO_CART, PURCHASE | Normal session with purchase. 6 views, 2 add-to-carts, 1 purchase. **INVALID EVENT**: PURCHASE with negative price (-99.99). |
| session-010 | 6 | VIEW, ADD_TO_CART | No purchase. 5 views, 1 normal add-to-cart, 1 absurd quantity (750). |
| session-011 | 10 | VIEW, ADD_TO_CART, PURCHASE | Normal session with purchase. 7 views, 2 add-to-carts, 1 purchase. **INVALID EVENT**: ADD_TO_CART with quantity 0. |
| session-012 | 6 | VIEW, ADD_TO_CART | No purchase. 4 views, 1 normal add-to-cart, 1 absurd quantity (2000). |
| session-013 | 9 | VIEW, ADD_TO_CART, PURCHASE | Normal session with purchase. 6 views, 2 add-to-carts, 1 purchase. |
| session-014 | 5 | VIEW, ADD_TO_CART | No purchase. 4 views, 1 normal add-to-cart, 1 absurd quantity (333). |
| session-015 | 10 | VIEW, ADD_TO_CART, PURCHASE | Normal session with purchase. 7 views, 2 add-to-carts, 1 purchase. |
| session-016 | 5 | VIEW, ADD_TO_CART | No purchase. 4 views, 1 normal add-to-cart, 1 absurd quantity (1500). |
| session-017 | 9 | VIEW, ADD_TO_CART, PURCHASE | Normal session with purchase. 6 views, 2 add-to-carts, 1 purchase. **INVALID EVENT**: PURCHASE with negative price (-199.99). |
| session-018 | 5 | VIEW, ADD_TO_CART | No purchase. 4 views, 1 normal add-to-cart, 1 absurd quantity (888). |
| session-019 | 10 | VIEW, ADD_TO_CART, PURCHASE | Normal session with purchase. 7 views, 2 add-to-carts, 1 purchase. **INVALID EVENT**: ADD_TO_CART with missing productId. |
| session-020 | 5 | VIEW, ADD_TO_CART | No purchase. 4 views, 1 normal add-to-cart, 1 absurd quantity (777). |
| session-021 | 9 | VIEW, ADD_TO_CART, PURCHASE | Normal session with purchase. 6 views, 2 add-to-carts, 1 purchase. |
| session-022 | 5 | VIEW, ADD_TO_CART | No purchase. 4 views, 1 normal add-to-cart, 1 absurd quantity (444). |
| session-023 | 5 | REMOVE_FROM_CART | **SPECIAL**: Only REMOVE_FROM_CART events. No views, no add-to-carts, no purchases. 5 remove events. |
| session-024 | 7 | VIEW, ADD_TO_CART | No purchase. 5 views, 1 normal add-to-cart, 1 absurd quantity (999). |
| session-025 | 2 | VIEW, PURCHASE | **SPECIAL**: Only VIEW and PURCHASE events. No add-to-carts. Minimal session. |

## Summary Statistics

- **Total Sessions**: 25
- **Total Events**: 280+
- **Sessions with Purchases**: 5 (20% of sessions) - sessions 001, 003, 005, 007, 009, 011, 013, 015, 017, 019, 021
- **Sessions without Purchases**: 14 (56% of sessions)
- **Special Sessions**: 2
  - session-023: Only REMOVE_FROM_CART events
  - session-025: Only VIEW and PURCHASE events (no add-to-carts)
- **Total VIEW Events**: 100+
- **Total ADD_TO_CART Events**: 30+ (11 with absurd quantities: 500, 1000, 250, 5000, 750, 2000, 333, 1500, 888, 777, 444, 999)
- **Total PURCHASE Events**: 11 (20% of sessions)
- **Total REMOVE_FROM_CART Events**: 5 (all in session-023)
- **Invalid Events**: 8 total
  - Missing productId: 2 events (session-001, session-019)
  - Negative quantity: 1 event (session-003)
  - Far future timestamp: 1 event (session-007)
  - Negative price: 2 events (session-009, session-017)
  - Zero quantity: 1 event (session-011)
  - Missing productId: 1 event (session-019)

## Test Data Categories

### Normal Sessions (No Issues)
- session-001, session-003, session-013, session-015, session-021

### Sessions with Absurd Quantities
- session-002 (500), session-004 (1000), session-006 (250), session-008 (5000), session-010 (750), session-012 (2000), session-014 (333), session-016 (1500), session-018 (888), session-020 (777), session-022 (444), session-024 (999)

### Sessions with Invalid Data
- session-001: ADD_TO_CART missing productId
- session-003: ADD_TO_CART with negative quantity (-5)
- session-005: ADD_TO_CART missing productId
- session-007: PURCHASE with far future timestamp (9999999999)
- session-009: PURCHASE with negative price (-99.99)
- session-011: ADD_TO_CART with zero quantity
- session-017: PURCHASE with negative price (-199.99)
- session-019: ADD_TO_CART missing productId

### Special Sessions
- session-023: Only REMOVE_FROM_CART events (5 events, no other event types)
- session-025: Only VIEW and PURCHASE (minimal session, no add-to-carts)

## Usage

Use this index to:
1. Identify sessions for specific test scenarios
2. Verify data validation and error handling
3. Test edge cases and invalid data handling
4. Validate filtering and aggregation logic
5. Test session-scoped event retrieval
