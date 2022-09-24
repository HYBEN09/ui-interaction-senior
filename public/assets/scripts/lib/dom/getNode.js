import { isString, throwTypeError } from "../utils";

export const getNodeList = (selector, context = document) => {
  if (!isString(selector)) {
    throwTypeError("");
  }
};
