import { throwTypeError } from "./throwError.js";
import { isFunction } from "./typeOf.js";

export function loop(callback, repeatCount = 10) {
  if (!isFunction(callback)) {
    throwTypeError("callback 인자 유형은 함수여야합니다");
  }

  //Array.of(10) =>[10]
  Array(repeatCount)
    .fill(null)
    .forEach((_, i) => callback(i));
}
// loop((i) => {
//   console.log(`${i}번째 반복중`);
// });
