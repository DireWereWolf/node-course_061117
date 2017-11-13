const Human = require('./human');
const EvEmitter = require('../../emitter');
const sinon = require('sinon');
const should = require('should');

describe('Class Human', function () {

  describe('constructor', function () {
    let human, name, emitter;

    beforeEach(function () {
      name = 'John';
      emitter = EvEmitter;
      human = new Human({
        name: name,
        emitter: EvEmitter
      });
    });

    it('Should have default \'isDead\' status, and it must be false', () => {
      should.exist(human.isDead);
      human.isDead.should.not.be.ok();
    });

    it('Should assign a name of human', () => {
      human.name.should.equal(name);
    });

    it('Should assign an Emitter', () => {
      human.emitter.should.equal(emitter);
    });
  });

  describe('constructor init listeners', function () {
    let emitter, spyOn;

    beforeEach(function () {
      emitter = EvEmitter;
      spyOn = sinon.spy(emitter, 'on');
    });

    afterEach(() => emitter.on.restore());

    it('Should register listener of shoot event', () => {
      let Johnny = new Human({emitter});

      spyOn.calledWithMatch('shoot').should.equal(true);
    });
  });

  describe('methods', function () {
    let human, name, emitter, spyPlay, spyEmit;

    beforeEach(function () {
      name = 'John';
      emitter = EvEmitter;
      human = new Human({
        name: name,
        emitter: EvEmitter
      });
      spyPlay = sinon.spy(human, 'play');
      spyEmit = sinon.spy(emitter, 'emit');

      this.clock = sinon.useFakeTimers();
    });

    afterEach(function () {
      return (
        human.play.restore(),
        emitter.emit.restore(),
        this.clock.restore()
      );
    });

    it('method \'play\'', function () {
      human.play();

      spyPlay.calledOnce.should.equal(true);
      spyEmit.called.should.equal(true);
      spyEmit.called.should.equal(true);
      spyEmit.calledWithMatch('roll').should.equal(true);
      spyEmit.calledWithMatch('triggerHummer').should.equal(true);

      this.clock.tick(3000);
      spyEmit.calledWithMatch('roll').should.equal(true);
      spyEmit.calledWithMatch('triggerHummer').should.equal(true);

    });

  });

});
