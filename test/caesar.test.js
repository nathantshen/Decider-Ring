// Write your tests here!
const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe("caesar", () => {
  it("should return false if shift not present", () => {
    let input = "hey";
    let shift = undefined;
    let actual = caesarModule.caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if shift = 0", () => {
    let input = "hey";
    let shift = 0;
    let actual = caesarModule.caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if shift is greater than 25", () => {
    let input = "hey";
    let shift = 30;
    let actual = caesarModule.caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if shift less than -25", () => {
    let input = "hey";
    let shift = -30;
    let actual = caesarModule.caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return wklqnixo when given thinkful", () => {
    let input = "thinkful";
    let shift = 3;
    let actual = caesarModule.caesar(input, shift, (encode = true));
    let expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });
  it("should decode 'bpqa qa i amkzmb umaaiom!' to 'this is a secret message!'", () => {
    let input = "bpqa qa i amkzmb umaaiom";
    let shift = -8;
    let actual = caesarModule.caesar(input, shift, (encode = true));
    let expected = "this is a secret message";
    expect(actual).to.equal(expected);
  });
  it("should return thinkful when given wklqnixo", () => {
    let input = "wklqnixo";
    let shift = -3;
    let actual = caesarModule.caesar(input, shift, (encode = true));
    let expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("spaces and characters should be maintained", () => {
    let input = "@#$% *&^&*&^ @#$%$#@";
    let shift = -3;
    let actual = caesarModule.caesar(input, shift, (encode = true));
    let expected = "@#$% *&^&*&^ @#$%$#@";
    expect(actual).to.equal(expected);
  });
  it("should invert shift (decode) if encode is false", () => {
    let input = "bpqa qa i amkzmb umaaiom";
    let shift = 8;
    let encode = false;
    let actual = caesarModule.caesar(input, shift, encode);
    let expected = "this is a secret message";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    let input1 = "A Message";
    let input2 = "a message";
    let shift = 8;
    let encode = true;
    let actual = caesarModule.caesar(input1, shift, encode);
    let expected = caesarModule.caesar(input2, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("should handle shifts that go past the end of the alphabet.", () => {
    let input1 = "z";
    let shift = 3;
    let encode = true;
    let actual = caesarModule.caesar(input1, shift, encode);
    let expected = "c";
    expect(actual).to.equal(expected);
  });
});