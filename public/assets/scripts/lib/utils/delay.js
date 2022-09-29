import { isFunction, isNumber } from "./typeOf.js";

export function delay(...args) {
  const [firstArg, ...restArgs] = args;

  if (!firstArg || isNumber(firstArg)) {
    let timeout = firstArg ?? 1000;
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }
  if (isFunction(firstArg)) {
    const [timeout] = restArgs; /* [number, ...] */
    return setTimeout(firstArg /* callback */, timeout ?? 1000);
  }
}

// callback api 지원
// delay(() => console.log("l초 뒤에 실행됨"));
// delay(() => console.log("3.l초 뒤에 실행됨"), 3100);

// promise api 지원
// delay().then(() => console.log("l초 뒤에 실행됨"));
// delay(2400).then(() => console.log("2.4초 뒤에 실행됨"));
