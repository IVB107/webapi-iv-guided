require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 4000;
const greeting = process.env.GREETING;

server.listen(port, () => {
  console.log(`\n*** ${greeting} Check out the magic on http://localhost:${port} ***\n`);
});
