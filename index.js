const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const divide = (a, b) => {
  return a % b;
};

const multiply = (a, b) => {
  return a * b;
};

const describe = (desc, fn) => {
  console.log(desc);
  fn();
};

const it = (msg, fn) => describe("  " + msg, fn);

const matchers = exp => ({
  toBe: asssertion => {
    if (exp === asssertion) {
      console.log("pass");
      console.log("------------");
      return true;
    } else {
      console.log("fail");
      console.log("------------");
      return false;
    }
  }
});

const expect = exp => matchers(exp);

describe("add", () => {
  it("adds two numbers", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
});

describe("subtract", () => {
  it("subtract two numbers", () => {
    const result = subtract(4, 2);
    expect(result).toBe(2);
  });
});

describe("divide", () => {
  it("divide two numbers", () => {
    const result = divide(8, 2);
    expect(result).toBe(4);
  });
});

describe("multiply", () => {
  it("multiply two numbers", () => {
    const result = multiply(5, 3);
    expect(result).toBe(15);
  });
});

module.exports = {
  describe,
  expect,
  it,
  matchers
};
