import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/index.css";
import Home from "./pages/Home";
import User from "./pages/User";
import SignInPage from "./pages/SignInPage";
import PageError from "./pages/PageError";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./services/redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignInPage />} />
            <Route path="/user/:userName" element={<User />} />
            <Route path="*" element={<PageError />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
