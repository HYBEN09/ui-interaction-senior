// const getCookie = (name) => {
//   const decodeCookie = decodeURIComponent(document.cookie);
//   const arrayCookie = decodeCookie.split("; ");

//   let result = null;

//   arrayCookie.forEach((element) => {
//     if (element.indexOf(name) === 0) {
//       result = element.substring(name.length + 1);
//     }
//   });

//   return result;
// };

// const setCookie = (name, value, options = {}) => {
//   let cookie = name + "=" + encodeURIComponent(value);
//   if (typeof options === "number") {
//     cookie = "; max-age" + (options * 86, 400);
//     document.cookie = cookie;
//   }
// };

const setCookie = (name, value, options = {}) => {
  if (typeof options === "number") {
    cookie = "; max-age" + (options * 86, 400);
  }
  value = encodeURIComponent(value);
  document.cookie = `${name}=${value}; path=/`;
};

const deleteCookie = (name) => {
  // setCookie(name, null, null);

  document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};

setCookie("name1", "혜빈", 365);
setCookie("name2", "변혜빈", 1000);

console.log(getCookie("name1"));

console.log(document.cookie);
