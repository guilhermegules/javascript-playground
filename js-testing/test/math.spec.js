const assert = require("assert");
const Math = require("../src/math.js");
const expect = require("chai").expect;
const sinon = require("sinon");

describe("Math class", () => {
  it("should sum two numbers", function (done) {
    const math = new Math();
    this.timeout(3000);

    math.sum(5, 5, (value) => {
      expect(value).to.equal(10);
      done();
    });
  });

  it("should multiply two numbers", function () {
    const math = new Math();
    expect(math.multiply(2, 5)).to.equal(10);
  });

  it('should call res with sum and index values', () => {
    const req = {};
    const res = {
      load: sinon.spy()
    }

    const math = new Math();

    math.printSum(req, res, 5, 5);

    expect(res.load.calledOnce).to.be.true;
  })

  it('should call res with sum and index values', () => {
    const req = {};
    const res = {
      load: sinon.spy()
    }

    const math = new Math();

    math.printSum(req, res, 5, 5);

    expect(res.load.calledOnce).to.be.true;
  })

  it('should call res with sum and index values, get them by index', () => {
    const req = {};
    const res = {
      load: sinon.spy()
    }

    const math = new Math();

    math.printSum(req, res, 5, 5);

    expect(res.load.args[0][1]).to.equal(10);
  })
});

describe('Testing chai', () => {
  it("should have property", () => {
    const obj = {
      name: "Guilherme Gules",
    };
    expect(obj).to.have.property(name);
  });

  it("should have property name value", () =>  {
    const obj = {
      name: "Guilherme Gules",
    };
    expect(obj).to.have.property(name).equal("Guilherme Gules");
  });
})
