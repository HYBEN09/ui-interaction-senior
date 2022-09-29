import { each, isObject, isString, throwTypeError } from "../utils/index.js";
import { attr } from "./attr.js";
import { last } from "./insert.js";
import { isElement, isHTML_string } from "./typeCheck.js";

export function create(type, attributes = null, ...children) {
  if (!isString(type)) {
    throwTypeError("type 인자는 HTML 요소의 이름(문자) 값만 허용합니다.");
  }

  const element = document.createElement(type);

  if (isObject(attributes)) {
    attr(element, attributes);
  }

  // insert children
  // need insert utils

  // children.forEach((child) => {
  //   if (isHTML_string(child)) {
  //     element.insertAdjacentHTML("beforeend", child);
  //   }

  //   if (isElement(child)) {
  //     element.insertAdjacentElement("beforeend", child);
  //   }
  // });

  // return element;

  each(children, (child) => last(element, child));

  return element;
}
