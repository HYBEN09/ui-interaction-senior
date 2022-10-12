//callback api
// delay(callback, api);

// function delay(callback, timeout = 1000) {
//   setTimeout(() => callback?.(), timeout);
// }

//----------------------------------------------------------------------------------------------

// promise api( 1 )
// delay(timeout).then(data);

// function delay(
//   timeout = 1000,
//   { data = null, shouldReject = false, errorMessage = "오류 발생" } = {}
// ) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Conditional (ternary) operator
//       !shouldReject ? resolve(data) : reject({ message: errorMessage });

//       // condition statement
//       // if (!shouldReject) {
//       //   resolve();
//       // } else {
//       //   reject({ message: "오류 발생" });
//       // }
//     }, timeout);
//   });
// }

//----------------------------------------------------------------------------------------------
// promise api(2)

const defaultOptions = {
  timeout: 1000,
  data: null,
  shouldReject: false,
  errorMessage: "오류 발생",
};

export function delay(options) {
  // 객체복사
  let config = { ...defaultOptions };

  if (typeof options === "number") {
    config.timeout = options;
  }

  //객체인지 아닌지 (isObject())
  if (options && typeof options === "object" && !Array.isArray(options)) {
    //객체 합성
    config = { ...config, ...options };
  }

  const { timeout, data, shouldReject, errorMessage } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Conditional (ternary) operator
      !shouldReject ? resolve(data) : reject({ message: errorMessage });
    }, timeout);
  });
}
