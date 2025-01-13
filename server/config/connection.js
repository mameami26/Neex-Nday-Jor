const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://localhost:27017/neex_nday_jor';

connect(connectionString);

module.exports = connection;
