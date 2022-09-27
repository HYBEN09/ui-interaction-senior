import { isFunction, throwTypeError } from "../utils/index.js";
import { isElement, isHTML_string } from "./typeCheck.js";

export function text(element, content = "") {
  if (!isElement(element)) {
    throwTypeError("element 인자는 요소 노드 유형만 허용합니다.");
  }

  if (isFunction(content)) {
    element.textContent = content(element.textContent);
    return;
  }

  element.textContent = content.toString();
}

export function html(element, content = "") {
  if (!isElement(element)) {
    throwTypeError("element 인자는 요소 노드 유형만 허용합니다. ");
  }

  if (isFunction(content)) {
    element.innerHtml = content(element.innerHtml);
    return;
  }

  if (!content) {
    throwTypeError("content 는 null 이나 undifined이면 안됩니다. ");
  }

  if (!isHTML_string(content)) {
    throwTypeError("content는 HTML 태그를 포함해야합니다");
  }

  element.innerHtml = content;
}
