import { fetchData } from "./assets/scripts/lib/utils/fetchData.js";
import {
  renderUserList,
  DUMMY_USER_LIST,
  renderSpinner,
  removeSpinner,
} from "./assets/scripts/lib/utils/userList.js";

// const userListElement = renderUserList(
//   DUMMY_USER_LIST,
//   document.querySelector(".user-card-list")
// );

// renderUserList([], document.querySelector(".user-card-list"));
const ENDPOINT = "https://jsonplaceholder.typicode.com/users";
const userCardListElement = document.querySelector(".user-card-list");

function rendingUserListPage() {
  renderSpinner(userCardListElement);

  fetchData.get(
    ENDPOINT,
    (data) => {
      setTimeout(() => {
        removeSpinner(userCardListElement);
        renderUserList(data, userCardListElement);
      }, 1000);
    },
    (error) => {
      console.error(error);
    }
  );
}

rendingUserListPage();
