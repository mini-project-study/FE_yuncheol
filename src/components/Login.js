import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Grid, Modalel, Text, Input, Button } from "../elements";
import { userState } from "../recoil/member";
import { URL } from "../shared/API";

const Login = (props) => {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [UserData, setUserData] = useRecoilState(userState);
  const loginbutton = async () => {
    try {
      console.log("login", id, pwd);
      const data = {
        email: "4444@naver.com",
        password: "1111",
      };
      const res = await URL.post("/login", data).data;
      console.log(res);
      setUserData(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modalel
      visible={props.login}
      Away={() => {
        props.setLogin(false);
      }}
    >
      <>
        <Grid padding="12px">
          <Text size="32px" bold>
            로그인
          </Text>
        </Grid>
        <Grid is_flex padding="12px">
          <Text size="14px">이메일</Text>
          <Grid width="80%">
            <Input
              placeholder="이메일를 입력해주세요."
              _onChange={(e) => {
                setId(e.target.value);
              }}
            ></Input>
          </Grid>
        </Grid>
        <Grid is_flex padding="12px">
          <Text size="14px">비밀번호</Text>
          <Grid width="80%">
            <Input
              type="password"
              placeholder="패스워드 입력해주세요."
              _onChange={(e) => {
                setPwd(e.target.value);
              }}
            ></Input>
          </Grid>
        </Grid>
        <Grid padding="12px">
          <Text cursor="pointer">회원가입</Text>
        </Grid>
        <Grid padding="12px">
          <Button _onClick={loginbutton}>로그인</Button>
        </Grid>
      </>
    </Modalel>
  );
};
export default Login;
