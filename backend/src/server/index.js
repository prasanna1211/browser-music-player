import Hapi from 'hapi';
import mongo from 'mongojs';

import routes from '../routes/user.js';

const server = new Hapi.Server({
  port: 3000,
})

server.app.db = mongo('music', ['user']);

server.route(routes);
// Start the server
async function start() {
  try {
      await server.start();
  }
  catch (err) {
      console.log(err);
      process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
};

start();