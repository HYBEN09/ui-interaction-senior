import { throwError } from "./throwError.js";
import { isNumber } from "./typeof.js";

export const getRandom = (n) => {
  if (!isNumber(n)) throwError("n값은 숫자형이 아닙니다.");
  return Math.round(Math.random() * n);
};

export const getRandomMinMax = (min = 0, max = 10) => {
  if (!isNumber(min) || !isNumber(max))
    throw Error("min또는 max값이 숫자현이 아닙니다.");
  return getRandom(max - min) + min;
};
