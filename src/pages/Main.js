import axios from "axios";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { HelloURL, Hellotest, TestAtom } from "../recoil";
const Main = () => {
  const [test, setTest] = useRecoilState(TestAtom);
  const [helloURL, setHelloURL] = useRecoilState(HelloURL);
  const [selechello, setSelechello] = useRecoilState(Hellotest);
  async function testfunction() {
    const data = {
      email: "test@test.com",
      password: "1234",
    };
    await axios
      .post("https://www.seoultaste.click/users/login", data)
      .then((res) => {
        console.log(res);
        setSelechello(true);
        setTest(JSON.stringify(res));
      })
      .catch((error) => console.log(error));
  }
  async function linkcheck() {
    const data = {
      email: "4444@naver.com",
      password: "1111",
    };
    await axios
      .post("http://184.72.42.251:8080/login", data)
      .then((res) => {
        console.log(res);
        setSelechello(true);
        setTest(JSON.stringify(res));
      })
      .catch((error) => {
        console.log(error.message);
        setSelechello(false);
        setTest(JSON.stringify(error));
      });
    // await axios
    //   .get("http://184.72.42.251:8080/hello")
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
  }
  return (
    <>
      <div>Main</div>
      <button onClick={testfunction}>정상작동 테스트</button>
      <div>URL 입력 (ex: http://3.36.xx.xx/)</div>
      <input
        type="text"
        onChange={(e) => {
          setHelloURL(e.target.value);
        }}
      />
      <div>
        입력된 URL : <a href={helloURL}>{helloURL}</a>
        <button onClick={linkcheck}>연결 테스트</button>
      </div>
      {selechello ? (
        <div style={{ color: "green" }}> success</div>
      ) : (
        <div style={{ color: "red" }}> fail</div>
      )}
      <div>{test}</div>
    </>
  );
};
export default Main;
