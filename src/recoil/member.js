import { atom, selector, selectorFamily } from "recoil";
import axios from "axios";
import { URL } from "../shared/API";
export const userState = atom({
  key: "userState",
  default: 0,
});

// const data = {
//   email: "4444@naver.com",
//   password: "1111",
// };
// await axios
//   .post("http://184.72.42.251:8080/login", data)
//   .then((res) => {
//     console.log(res);
//     setSelechello(true);
//     setTest(JSON.stringify(res));
//   })
//   .catch((error) => {
//     console.log(error.message);
//     setSelechello(false);
//     setTest(JSON.stringify(error));
//   });
