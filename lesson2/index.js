const Emitter = require('./src/emitter');
const Human = require('./src/factories/human/human');
const Gun = require('./src/factories/gun/gun');

const John = new Human({name: 'John', emitter: Emitter});
const Colt = new Gun({emitter: Emitter});

John.play();