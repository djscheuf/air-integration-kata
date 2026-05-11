# Integration Kata Exercise Goals

## Overview
This kata exercise teaches developers how to integrate data from multiple APIs to construct user journeys. Developers will learn to join session-level event streams with user-level context to create a comprehensive view of user behavior over time.

## Learning Objectives

### Primary Goal
Utilize AI Agents/System to implement a function/service that pulls data from two separate APIs and produces **user journeys** as JSON output, showing:
- What users were viewing/interacting with
- The state of their account at specific points in time
- Cart contents and changes over time
- Purchase history and patterns

Each week will target a specific part of the SDLC cycle, and a particular wrinkle to challenge the developer's Agentic system. 

### Constraints:
1. You will delete the implementation each week, and start fresh with a new approach.
> You may keep all skills, hooks, workflows, rules, orchestrators, and agent definitions. 
2. You are not allowed to modify the mock APIs, or their data. 
3. The goal of the exercise is to learn and improve your Agentic system, not to produce a perfect implementation.

## Four-Week Progression

### Week 1: Discovery & Context Capture
- This Kata simulates a semi-brownfield scenario where you are brought in to understand an existing system and build a new feature.
- You must prevent the AI from 're-writing' the existing system, and instead focus on understanding it and building on top of it.

This week, work on the 'discovery' phase, that is understanding the existing system, and capturing context for the design and implementation prompts, including where the agent should and should not make changes.

Guiding Questions: 
1. What context will future agents need? How do I want to carry that context forward? 
2. How can I _prevent_ the Agent's from changing anything related to the External APIs? How would I test to confirm the block works?

### Week 2: Design & Feasibility
- With context about the existing systems, it's time for the agent to craft a design suitable to the task, using the context we've already gathered. 
- But what if the design isn't feasible? How do we validate that? How would we know?

This week, we'll work on the 'design' phase, that is determining the kind of changes needed, and the approach to take. As part of evaluating the design, we should check for feasibility and missing information, so future agent's don't attempt the impossible, or worse hallucinate a 'working system'!

Guiding Questions:
1. What are the steps in creating a good solution design? What context do we need to make a good design?
2. How do we evaluate a design, what makes it good? What makes a design feasible, and how do we check for that? 

### Week 3: Implementation & Proof
- With a good design in place, it's time to implement the solution. 
- But how do we know it works? How do we validate that the implementation meets the requirements?
(You guessed it! It's TDD again!)

Guiding Questions:
1. AI Agents are lazy just like humans, so how do we ensure they actually test their code? 
2. What are the risks if we don't TDD, and instead just test at the end?
3. How do we make the test feedback useful and actionable for the agent? 

### Week 4: Optimization
- Ideally, you have a working, tested solution in place!
- How might your agentic system be optimized? 

Guiding Questions:
1. What aspects of your agentic system contribute to implementation cost? 
2. What are the bottlenecks in time? 
3. What does the system expect of users in terms of experience or knowledge?
4. How would you check improvements in those things? 

### Focus Areas
The exercise prioritizes:
1. Data integration and joining logic
2. Context preservation for future use
3. Robust validation and error handling

Over:
- Specific technology choices
- UI/UX implementation
- Performance optimization

## Example User Journey Output

```json
{
  "userId": "user-789",
  "journeys": [
    {
      "sessionId": "session-123",
      "startTime": 1620000000,
      "endTime": 1620003600,
      "events": [
        {
          "timestamp": 1620000000,
          "type": "VIEW",
          "details": { "productId": "prod-456" }
        },
        {
          "timestamp": 1620000030,
          "type": "ADD_TO_CART",
          "details": { "productId": "prod-456", "quantity": 1 }
        }
      ],
      "cartStateChanges": [
        {
          "timestamp": 1620000030,
          "items": [{ "productId": "prod-456", "quantity": 1, "price": 29.99 }],
          "total": 29.99
        }
      ]
    }
  ]
}
```
