import { heb, HTTP_METHODS } from "./assets/scripts/heb.js";

const ENDPOINT = "https://jsonplaceholder.typicode.com/users";
const buttonGroup = document.querySelector(".buttonGroup");

// 이벤트 위임
buttonGroup.addEventListener("click", async (e) => {
  switch (e.target.dataset.method) {
    case HTTP_METHODS.post:
      heb
        .post(ENDPOINT, {
          id: 11,
          name: "hyebn",
          username: "hyebeen",
          email: "hyebn@google.com",
        })
        .then((response) => console.log(response))
        .catch((error) => console.error(error.message));
      break;

    case HTTP_METHODS.put:
      heb
        .put(`${ENDPOINT}/10`, {
          name: "hyebn",
        })
        .then((response) => console.log(response))
        .catch((error) => console.error(error.message));
      break;

    case HTTP_METHODS.patch:
      heb
        .put(`${ENDPOINT}/6`, {
          name: "hyebn",
        })
        .then((response) => console.log(response))
        .catch((error) => console.error(error.message));
      break;

    case HTTP_METHODS.delete:
      heb
        .delete(`${ENDPOINT}/4`)
        .then((response) => console.log(response))
        .catch((error) => console.error(error.message));
  }
});
