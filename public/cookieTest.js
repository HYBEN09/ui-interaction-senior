import { getCookie, deleteCookie, setCookie } from "./assets/scripts/cookie.js";
import { delay } from "./assets/scripts/lib/utils/delay.js";

// delay(1200).then(() => {
//   setCookie("uid", "duicosk-x2!", { "max-age": 3600 * 24 });
// });

// delay(1500).then(() => {
//   setCookie("uname", "혜빈", { "max-age": 3600 * 12 });
// });

// delay(2000).then(() => {
//   console.log(getCookie("uname"), getCookie("uid"));
// });

// delay(2500).then(() => {
//   deleteCookie("uname");
//   deleteCookie("uid");
// });

delay(1200).then(() => {
  setCookie("name", "혜빈", { "max-age": 3600 * 12 });
});

delay(1500).then(() => {
  console.log(getCookie("name"), getCookie("hobby"));
});

delay(1000).then(() => {
  deleteCookie("uname");
  deleteCookie("uid");
});
