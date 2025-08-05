describe("pow", () => {
  describe("Raises x to power 3", () => {
    function makeTest(x) {
      let expected = x * x * x;

      it(`${x} in the power 3 is ${expected}`, () => {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  describe("Raises x to power 2", () => {
    function makeTest(x) {
      let expected = x * x;

      it(`${x} in the power 2 is ${expected}`, () => {
        assert.equal(pow(x, 2), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  it("should return NaN when result is negative", () => {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", () => {
    assert.isNaN(pow(2, 1.5));
  });
});

describe("test", () => {
  before(() => alert("Testing started – before all tests"));
  after(() => alert("Testing finished – after all tests"));

  beforeEach(() => alert("Before a test – enter a test"));
  afterEach(() => alert("After a test – exit a test"));

  it("test 1", () => alert(1));
  it("test 2", () => alert(2));
});
