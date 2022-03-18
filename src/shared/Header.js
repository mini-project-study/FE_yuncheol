import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import { Grid, Button } from "../elements";
import theme from "../Styles/theme";

const Header = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  return (
    <>
      <Grid is_flex center bg={theme.color.gray5}>
        <Grid is_flex padding="8px">
          <Button
            width="50%"
            _onClick={() => {
              navigate("/");
            }}
          >
            홈
          </Button>
          <Grid width="50%"></Grid>
          <Grid width="50%"></Grid>
        </Grid>
        <Grid is_flex>
          <Grid width="50%"></Grid>
          <Grid width="50%"></Grid>

          <Button
            margin="12px"
            width="50%"
            _onClick={() => {
              navigate("/profile");
            }}
          >
            프로필
          </Button>
          <Button
            margin="12px"
            width="50%"
            _onClick={() => {
              setLogin(true);
            }}
          >
            로그인
          </Button>
        </Grid>
      </Grid>
      {login && <Login login={login} setLogin={setLogin} />}
    </>
  );
};
export default Header;
