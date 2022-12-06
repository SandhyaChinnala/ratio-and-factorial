const factorialOfNum = require("../factorial/index");
const rationOfTwoNum = require("../ratio/index");

const ratioAndFactorial = (num1, num2, num3) => {
  return {
    ratio: rationOfTwoNum(num1, num2),
    factorial: factorialOfNum(num3),
  };
};

module.exports = ratioAndFactorial;
