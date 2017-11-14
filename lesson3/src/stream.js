const stream = require('stream');
const fs = require('fs');

const reader = new fs.createReadStream('./src/example.txt', { encoding: 'utf-8' });
const writer = process.stdout;
const transformer = new stream.Transform();

transformer._transform = function (chunk, encoding, callback) {
  let txtStrings = chunk.toString('utf-8').split('\n');
  let txtStringsUpper = txtStrings.map(str => str.toUpperCase()).filter(i => i !== '[4X:]');

  let i = 0;
  let interval = setInterval(() => {
    if(i < txtStringsUpper.length) {
      this.push(`${txtStringsUpper[i]}\n`);
      i+=1;
    } else {
      clearInterval(interval);
      callback();
    }
  }, 2000);

};

module.exports = reader.pipe(transformer).pipe(writer);