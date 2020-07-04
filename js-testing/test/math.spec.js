const assert = require("assert");
const Math = require("../src/math.js");
const expect = require("chai").expect;

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

  it("should have property", function () {
    const obj = {
      name: "Guilherme Gules",
    };
    expect(obj).to.have.property(name);
  });

  it("should have property name value", function () {
    const obj = {
      name: "Guilherme Gules",
    };
    expect(obj).to.have.property(name).equal("Guilherme Gules");
  });
});
