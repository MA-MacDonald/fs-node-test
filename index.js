const logger = require('./logger');
const fs = require('fs');

fs.watch('./logs/combined.log', event => {
  if (event === 'change') {
    console.log('log file has updated');
  }
});

function intervalFunc() {
  logger.info('new log message');
}
setInterval(intervalFunc, 5000);
