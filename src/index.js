import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./Styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Loading from "./shared/Loading";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      {/* <Suspense fallback={<Loading />}> */}
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </Suspense> */}
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
