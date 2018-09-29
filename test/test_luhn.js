var assert = require("chai").assert;
var luhn = require("../luhn");

describe("Luhn validation function", function() {
  it("should return true if number is valid", function() {
    var number = 79927398713;
    var result = luhn(number);
    assert.isTrue(result);
  });
  it("should return true if number is valid", function() {
    var number = 79927398712;
    var result = luhn(number);
    assert.isFalse(result);
  });
  it("should return true if number is valid", function() {
    var number = 79927398719;
    var result = luhn(number);
    assert.isFalse(result);
  });
  it("should return true if number is valid", function() {
    var number = 44825976127;
    var result = luhn(number);
    assert.isTrue(result);
  });
});
