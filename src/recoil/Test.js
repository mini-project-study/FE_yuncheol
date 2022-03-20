import { atom, selector } from "recoil";
import axios from "axios";

const TestAtom = atom({
  key: "TestAtom",
  default: [],
});
const HelloURL = atom({
  key: "HelloURL",
  default: [],
});

const Hellotest = atom({
  key: "Hellotest",
  default: false,
});

// const selectorPost = selector({
//   key: 'selectorPost',
//   get: async ({get}) => {
//     get(postListAtom);
//     return await axios.get(' http://localhost:3001/post')
//       .then((res) => {
//         return res.data;
//       })
//       .catch((err) => err);
//   },
//   // set: async () => {
//   //
//   // }
// });

export { TestAtom, HelloURL, Hellotest };
