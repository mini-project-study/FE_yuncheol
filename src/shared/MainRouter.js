import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Login from "../pages/Login";
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
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default MainRouter;
