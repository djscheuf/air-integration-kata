const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const eventsDataPath = path.join(__dirname, '../data/events.json');

function loadEvents() {
  try {
    const data = fs.readFileSync(eventsDataPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

router.get('/:sessionId', (req, res) => {
  const { sessionId } = req.params;

  if (!sessionId) {
    return res.status(400).json({ error: 'sessionId is required' });
  }

  const allEvents = loadEvents();
  const sessionEvents = allEvents.filter(event => event.sessionId === sessionId);

  if (sessionEvents.length === 0) {
    return res.status(404).json({ error: 'No events found for this session' });
  }

  res.json(sessionEvents);
});

module.exports = router;
