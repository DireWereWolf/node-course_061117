const EventEmitter = require('events');

class Emitter extends EventEmitter {
  constructor() {
    super();
    this.on('newListener', (event) => {
      if (process.env.NODE_ENV !== 'test') {
        console.log(`callback subscribe to ${event}`);
      }
    });
  }
}

module.exports = new Emitter();