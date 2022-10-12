export function fetchData({
  //url, body, onSuccess, onFail 의 표준값 => null
  //method, body, onSuccess, onFail의 값은 변환될수 있으므로 null 값을 줌
  //{}={합성될 값 위해}

  url = null,
  method = "GET",
  body = null,
  onSuccess = null,
  onFail = null,
} = {}) {
  //url값은 필수이므로 null이라면 에러 띄우기
  if (!url) {
    throw new TypeError("서버와 요청할 url 인자는 반드시 필요합니다.");
  }

  const xhr = new XMLHttpRequest();

  //method = put, post, get, delete 적용가능
  xhr.open(method, url);

  xhr.addEventListener("readystatechange", () => {
    const { status, readyState, response } = xhr;

    if (status >= 200 || status < 400) {
      if (readyState === 4) {
        //onSuccess가 함수 라면 JSON.parse(response) 실행
        onSuccess?.(JSON.parse(response));
      }
    } else {
      //onFail가 함수 라면  message: "네트워크 통신에 장애가 있습니다."를 실행
      onFail?.({ message: "네트워크 통신에 장애가 있습니다." });
    }
  });

  xhr.send(body ?? JSON.stringify(body));
}

//함수도 객체이므로 속성을 받을 수 있음
fetchData.get = (url, onSuccess, onFail) => {
  fetchData({
    url,
    onSuccess,
    onFail,
  });
};

//data를 받아와야 되므로 body를 받음

fetchData.put = (url, body, onSuccess, onFail) => {
  fetchData({
    method: "PUT",
    url,
    body,
    onSuccess,
    onFail,
  });
};

fetchData.post = (url, body, onSuccess, onFail) => {
  fetchData({
    method: "POST",
    url,
    body,
    onSuccess,
    onFail,
  });
};

fetchData.delete = (url, onSuccess, onFail) => {
  fetchData({
    method: "DELETE",
    url,
    onSuccess,
    onFail,
  });
};

/* -------------------------------------------------------------------------- */
/* Promise API                                                                */
/* -------------------------------------------------------------------------- */

// AJAX (XMLHttpRequest: create, open, listen, send) 래핑
// fetchPromise → Promise<any>
// .then(onFulfilled)
// .catch(onRejected)
// .finally(onAlways)

const defaultOptions = {
  url: "",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    // ...
  },
  body: null, // JSON.stringify() 메서드로 문자 값을 전달
};

// LOW LEVEL API
export const fetchPromise = (userOptions = {}) => {
  // 객체 합성(믹스인)
  // 구조 분해 할당
  const { url, method, body, headers } =
    // 상수인 defaultOptions을 바꿀수 없으니 (userOptions이 강제로 defaultOptions을 바꿀수 있으므로)
    //{}객체를 새로 만들어서 defaultOption값과 userOptions값을 복사
    //이 메서드 는 하나 이상의 소스 개체 에서 대상 개체 로 열거 가능한 모든 자체 속성Object.assign() 을 복사 합니다

    Object.assign({}, defaultOptions, userOptions);

  // validation
  if (!url) {
    throw new TypeError("서버와 요청할 url 인자는 반드시 필요합니다.");
  }

  // create
  const xhr = new XMLHttpRequest();

  // open
  xhr.open(method, url);

  // send
  xhr.send(body ? JSON.stringify(body) : null);

  // return promise object
  return new Promise((resolve, reject) => {
    // listen
    xhr.addEventListener("readystatechange", (e) => {
      const { status, readyState, response, error } = xhr;
      // xhr.status >= 200 || xhr.status < 400
      if (status >= 200 || status < 400) {
        // xhr.readyState === 4
        if (readyState === 4) {
          resolve(JSON.parse(response));
        }
      } else {
        reject(error);
      }
    });
  });
};

// HIGH LEVEL API

// CREATE
fetchPromise.post = (url, body) => {
  return fetchPromise({
    url,
    body,
    method: "POST",
  });
};
// READ
fetchPromise.get = (url) => {
  return fetchPromise({ url });
};
// UPDATE
fetchPromise.put = (url, body) => {
  return fetchPromise({
    url,
    body,
    method: "PUT",
  });
};
// DELETE
fetchPromise.delete = (url) => {
  return fetchPromise({
    url,
    method: "DELETE",
  });
};
