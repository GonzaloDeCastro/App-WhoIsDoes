import React from "react";
import ReactDOM from "react-dom/client";
import GlobalCSS from "./css/global.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <App />
      </BrowserRouter>
    </Provider>
  </>
);
