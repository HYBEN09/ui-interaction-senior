import { fetchData } from "./assets/scripts/lib/utils/fetchData.js";

const callButton = document.querySelector(".button");
const printArea = document.querySelector(".print code");

const printAlbums = (albumString) => {
  printArea.textContent = albumString;
};

const handleRequestAlbums = () => {
  //url은 필수 값
  // fetchData({
  //   url: "/api/albums.json",
  //   onSuccess(data) {
  //     console.log(data);
  //   },
  //   onFail(error) {
  //     console.error(error.message);
  //   },
  // });

  // fetchData.get("/api/albums.json", (data) => console.log(data));

  const newPostData = {
    id: 11,
    name: "HYEBN",
    username: "hyebeen Byun",
    email: "hyebeen2658@gmail.com",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  fetchData.post(
    "https://jsonplaceholder.typicode.com/users",
    newPostData,
    (data) => console.log(data),
    (error) => console.error(error.message)
  );

  const editPostData = {
    name: "혜빈",
    username: "변혜빈",
  };

  fetchData.put(
    "https://jsonplaceholder.typicode.com/users/2",
    editPostData,
    (data) => console.log(data),
    (error) => console.error(error.message)
  );

  fetchData.delete(
    "https://jsonplaceholder.typicode.com/users/1",
    (data) => console.log(data),
    (error) => console.error(error.message)
  );
};

callButton.addEventListener("click", handleRequestAlbums);
