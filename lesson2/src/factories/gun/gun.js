let circle = [false, false, false, false, false, false, true];

class Gun {
    constructor({emitter}) {
        this.emitter = emitter;
        this.bullet = false;

        emitter.on('roll', () => {
            this.bullet = circle[Math.floor(Math.random() * circle.length)];
        });

        emitter.on('triggerHummer', () => {
            emitter.emit('shoot', this.bullet);
        })
    }
}

module.exports = Gun;