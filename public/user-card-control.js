import {
  fetchData,
  fetchPromise,
} from "./assets/scripts/lib/utils/fetchData.js";
import {
  renderUserList,
  DUMMY_USER_LIST,
  renderSpinner,
  removeSpinner,
} from "./assets/scripts/lib/utils/userList.js";
import { delay } from "./assets/scripts/lib/utils/delay.js";
import { heb } from "./assets/scripts/heb.js";

// const userListElement = renderUserList(
//   DUMMY_USER_LIST,
//   document.querySelector(".user-card-list")
// );

// renderUserList([], document.querySelector(".user-card-list"));
const ENDPOINT = "https://jsonplaceholder.typicode.com/users";
const userCardList = document.querySelector(".user-card-list");

function rendingUserListPage() {
  renderSpinner(userCardList);

  //================================================================================
  //TODO
  //[] delay 유틸리티 작성
  //[] fetchData API(callback => promise) 변경

  //================================================================================
  //BEFORE

  // fetchData.get(
  //   ENDPOINT,
  //   (data) => {
  //     setTimeout(() => {
  //       removeSpinner(userCardList);
  //       renderUserList(data, userCardList);
  //     }, 1000);
  //   },
  //   (error) => {
  //     console.error(error);
  //   }
  // );

  // fetchData.get(
  //   ENDPOINT,
  //   (data) => {
  //     delay(1000).then(() => {
  //       removeSpinner(userCardList);
  //       renderUserList(data, userCardList);
  //     });
  //   },
  //   (error) => {
  //     console.error(error);
  //   }
  // );

  //===========================================================================

  //AFTER
  // promise api
  // fetchPromise
  //   .get(ENDPOINT)
  //   .then((data) => {
  //     //data가 문자열로 들어오므로 JSON.parse(data)사용
  //     data = JSON.parse(data);
  //     delay(1000).then(() => {
  //       removeSpinner(userCardList);
  //       renderUserList(data, userCardList);
  //     });
  //   })
  //   .catch((error) => {
  //     removeSpinner(userCardList);
  //     console.error(error.message);
  //   });

  //always 실행
  //finally 사용시 바로 사용되기 때문에, 로딩이 안보임
  //해결 => delay, catch 에 removeSpinner(userCardList); 넣음

  // .finally(() => {
  //   removeSpinner(userCardList);
  // });

  //=============================================================================================

  // PROMISE COMBINATION

  // fetchPromise
  //   .get(ENDPOINT)
  //   //2초뒤 실행 (500+1000+500)
  //   .then((data) => delay(500, { data }))
  //   .then((data) => delay(1000, { data }))
  //   .then((data) => delay(500, { data }))
  //   .then((data) => renderUserList(data, userCardList))
  //   .catch((error) => console.error(error))
  //   .finally(() => removeSpinner(userCardList));

  //===========================================================================

  //FETCH API

  // promise api( 1 )

  // fetch(ENDPOINT)
  //   .then((response) => response.json())
  //   .then((json) => delay(2000, { data: json }))
  //   .then((data) => {
  //     removeSpinner(userCardList);
  //     renderUserList(data, userCardList);
  //   })
  //   .catch((error) => {
  //     removeSpinner(userCardList);
  //     console.error(error.message);
  //   });

  //===========================================================================

  // promise api( 2 )

  // fetch(ENDPOINT)
  //   .then((response) => response.json())
  //   .then((json) => delay({ timeout: 2000, data: json }))
  //   .then((data) => {
  //     removeSpinner(userCardList);
  //     renderUserList(data, userCardList);
  //   })
  //   .catch((error) => {
  //     removeSpinner(userCardList);
  //     renderUserList(data, userCardList, error);
  //   });
}

async function rendingUserListPage1() {
  renderSpinner(userCardList);

  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();

    // => 2줄 1줄로 줄여 쓰기;
    // const data = await (await fetch(ENDPOINT)).json();

    await delay(1500);
    removeSpinner(userCardList);
    renderUserList(data, userCardList);
  } catch (error) {
    renderUserList(data, userCardList, error);
  } // finally {
  //   removeSpinner(userCardList);
  // }
}

//===========================================================================
async function rendingUserListPage2() {
  renderSpinner(userCardList);

  try {
    const data = await heb.get(ENDPOINT);
    renderUserList(data, userCardList);
  } catch (error) {
    renderUserList(data, userCardList, error);
  } finally {
    removeSpinner(userCardList);
  }
}

rendingUserListPage2();
