import { isNull, isUndefined } from "../utils/typeof.js";
import { isString } from "../utils/typeof.js";

export const isElement = (node) => {
  if (isNull(data) || isUndefined(data)) {
    throw new Error(
      "전달된 인자의 타입에 문제가 있습니다. 요소 노드를 전달하세요."
    );
  }
  return node.nodeType === document.ELEMENT_NODE;
};

export const isHtml_string = (data) => {
  return isString(data) && /<[^>]*>/g.test(data);
};
