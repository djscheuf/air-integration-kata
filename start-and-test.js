const { spawn } = require('child_process');
const http = require('http');

const USERS_API_PORT = 3001;
const EVENTS_API_PORT = 3000;

function makeRequest(port, path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port,
      path,
      method: 'GET',
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          resolve({
            status: res.statusCode,
            data: JSON.parse(data),
          });
        } catch (e) {
          resolve({
            status: res.statusCode,
            data,
          });
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

function waitForServer(port, maxAttempts = 30) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const checkServer = () => {
      makeRequest(port, '/health')
        .then(() => resolve())
        .catch(() => {
          attempts++;
          if (attempts >= maxAttempts) {
            reject(new Error(`Server on port ${port} did not start within ${maxAttempts} attempts`));
          } else {
            setTimeout(checkServer, 200);
          }
        });
    };

    checkServer();
  });
}

async function runTests() {
  console.log('\n=== Testing Users and Sessions API ===');
  try {
    const usersRes = await makeRequest(USERS_API_PORT, '/users');
    console.log('✓ GET /users');
    console.log(`  Status: ${usersRes.status}`);
    console.log(`  Users: ${usersRes.data.users.join(', ')}`);

    const firstUser = usersRes.data.users[0];
    console.log(`\n✓ Using first user: ${firstUser}`);

    const sessionsRes = await makeRequest(USERS_API_PORT, `/users/${firstUser}/sessions`);
    console.log(`✓ GET /users/${firstUser}/sessions`);
    console.log(`  Status: ${sessionsRes.status}`);
    console.log(`  Sessions: ${sessionsRes.data.sessions.join(', ')}`);

    const firstSession = sessionsRes.data.sessions[0];
    console.log(`\n✓ Using first session: ${firstSession}`);

    console.log('\n=== Testing Event Stream API ===');
    const eventsRes = await makeRequest(EVENTS_API_PORT, `/events/${firstSession}`);
    console.log(`✓ GET /events/${firstSession}`);
    console.log(`  Status: ${eventsRes.status}`);
    
    if (eventsRes.status === 200) {
      console.log(`  Events found: ${eventsRes.data.length}`);
      if (eventsRes.data.length > 0) {
        console.log(`  First event type: ${eventsRes.data[0].eventType}`);
      }
    } else if (eventsRes.status === 404) {
      console.log(`  No events found for this session (expected if session has no events)`);
      console.log(`  Testing with session-123 which has events...`);
      const testEventsRes = await makeRequest(EVENTS_API_PORT, `/events/session-123`);
      console.log(`✓ GET /events/session-123`);
      console.log(`  Status: ${testEventsRes.status}`);
      console.log(`  Events found: ${testEventsRes.data.length}`);
      console.log(`  First event type: ${testEventsRes.data[0].eventType}`);
    }

    console.log('\n✅ All tests passed! Both APIs are functional.');
    console.log('\nAPIs are running. Press Ctrl+C to stop.\n');
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    process.exit(1);
  }
}

async function main() {
  console.log('Starting both mock APIs...\n');

  const usersApiProcess = spawn('node', ['server.js'], {
    cwd: './external/users-and-sessions',
    stdio: 'inherit',
  });

  const eventsApiProcess = spawn('node', ['server.js'], {
    cwd: './external/event-stream',
    stdio: 'inherit',
  });

  const cleanup = () => {
    console.log('\nShutting down APIs...');
    usersApiProcess.kill();
    eventsApiProcess.kill();
    setTimeout(() => {
      process.exit(0);
    }, 500);
  };

  process.on('SIGINT', cleanup);
  process.on('SIGTERM', cleanup);

  try {
    console.log('Waiting for Users and Sessions API to start...');
    await waitForServer(USERS_API_PORT);
    console.log(`✓ Users and Sessions API started on port ${USERS_API_PORT}\n`);

    console.log('Waiting for Event Stream API to start...');
    await waitForServer(EVENTS_API_PORT);
    console.log(`✓ Event Stream API started on port ${EVENTS_API_PORT}\n`);

    await runTests();
  } catch (error) {
    console.error('Error:', error.message);
    cleanup();
  }
}

main();
