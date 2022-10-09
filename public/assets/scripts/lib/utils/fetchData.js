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
