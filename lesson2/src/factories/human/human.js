const logger = require('../../logger');

class Human {
    constructor({name, emitter}) {
        this.name = name;
        this.emitter = emitter;
        this.isDead = false;

        emitter.on('shoot', (bullet) => {
           if (bullet) {
             this.isDead = true;
             logger('Game over');
           } else {
             logger('Game go on');
             return;
            }
        });
    }

    play() {
      this.emitter.emit('roll');
      this.emitter.emit('triggerHummer');
      setInterval(() => {
        if (!this.isDead){
            // this.emitter.emit('roll');
            // this.emitter.emit('triggerHummer');
        }
      }, 3000);
    }


};

module.exports = Human;