require('dotenv').config();
const chronos = require('@chronosmicro/tracker');

chronos.use({
  microservice: 'books',
  interval: 2000,
  // dockerized: true,ß
  database: {
    connection: 'gRPC',
    type: 'MongoDB',
    URI: process.env.CHRONOS_URI,
  },
  notifications: [],
});
