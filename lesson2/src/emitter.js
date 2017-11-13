const EventEmitter = require('events');
const logger = require('./logger');

class Emitter extends EventEmitter {
  constructor() {
    super();
    this.on('newListener', (event) => {
      if (process.env.NODE_ENV !== 'test') {
        logger(`callback subscribe to ${event}`);
      }
    });
  }
}

module.exports = new Emitter();