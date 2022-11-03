const { it, describe } = require("mocha");
const { assert } = require("chai");
const { getAllUsers } = require("../src/users/users.controllers");

const sum = (a, b) => a + b;

describe("Function Sum test", () => {
  it("Must return 12 when recieves 8 and 4", (done) => {
    const response = sum(8, 4);
    assert.equal(response, 12);
    done();
  });
  it("Must return 5 when recieves 3 and 2", (done) => {
    const response = sum(2, 3);
    assert.equal(response, 5);
    done();
  });
});

describe("Users controller test", () => {
  it("Must return all Users", (done) => {
    try {
      const data = getAllUsers();
      assert.typeOf(data, "array");
      done();
    } catch (error) {
      console.log(error);
    }
  });
});
