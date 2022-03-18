import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Profile from "../pages/Profile";
import Main from "../pages/Main";
import theme from "../Styles/theme";
import Header from "./Header";

const MainRouter = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default MainRouter;
