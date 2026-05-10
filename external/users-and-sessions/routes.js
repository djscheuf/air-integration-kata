const express = require('express');
const { sessionToUserMap, userSessionsMap, cartHistoryMap } = require('./db');

const router = express.Router();

router.get('/users/session/:sessionId', (req, res) => {
  const { sessionId } = req.params;
  const userId = sessionToUserMap[sessionId];

  if (!userId) {
    return res.status(404).json({ error: 'Session not found' });
  }

  res.json({
    userId,
    sessionId,
  });
});

router.get('/users/:userId/sessions', (req, res) => {
  const { userId } = req.params;
  const sessions = userSessionsMap[userId];

  if (!sessions) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({
    userId,
    sessions,
  });
});

router.get('/users/:userId/cart', (req, res) => {
  const { userId } = req.params;
  const { timestamp } = req.query;

  const cartHistory = cartHistoryMap[userId];

  if (!cartHistory) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (timestamp !== undefined) {
    const targetTimestamp = parseInt(timestamp, 10);

    if (isNaN(targetTimestamp)) {
      return res.status(400).json({ error: 'Invalid timestamp' });
    }

    const cartAtTime = cartHistory.find((snapshot) => snapshot.timestamp === targetTimestamp);

    if (!cartAtTime) {
      return res.status(404).json({ error: 'Cart snapshot not found at specified timestamp' });
    }

    return res.json({
      userId,
      timestamp: targetTimestamp,
      items: cartAtTime.items,
      total: cartAtTime.total,
    });
  }

  res.json({
    userId,
    cartHistory,
  });
});

module.exports = router;
