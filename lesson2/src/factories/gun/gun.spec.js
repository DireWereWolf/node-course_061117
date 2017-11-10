const Gun = require('./gun');
const EvEmitter = require('../../emitter');
const sinon = require('sinon');
const should = require('should');

describe('Class Gun', function () {

  describe('constructor', function () {
    let gun, emitter;

    beforeEach(function () {
      emitter = EvEmitter;
      gun = new Gun({emitter: EvEmitter});
    });

    it('Should have default bullet, and it must be false', () => {
      should.exist(gun.bullet);
      gun.bullet.should.not.be.ok();
    });

    it('Should assign an Emitter', () => {
      gun.emitter.should.equal(emitter);
    });

  });

  describe('constructor init listeners', function () {
    let emitter, spyOn;

    beforeEach(function () {
      emitter = EvEmitter;
      spyOn = sinon.spy(emitter, 'on');
    });

    afterEach(() => emitter.on.restore());

    it('Should register listeners of roll and triggerHummer events', () => {
      let Revolver = new Gun({emitter});

      spyOn.calledWithMatch('triggerHummer').should.equal(true);
      spyOn.calledWithMatch('roll').should.equal(true);
    });
  })

});