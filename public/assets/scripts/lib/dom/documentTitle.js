import { isFunction } from "../utils/typeof.js";

const INITIAL_DOCUMENT_TITLE = document.title;

const getDocumentTitle = () => {
  return document.title;
};

const setDocumentTitle = (content) => {
  document.title = content;
};

export const documentTitle = (content) => {
  if (!content) {
    return getDocumentTitle();
  }

  let willContent = content;

  if (isFunction(content)) {
    willContent = content(INITIAL_DOCUMENT_TITLE);
  }

  setDocumentTitle(willContent);
};
