import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faHouse,
  faMagnifyingGlass,
  faPencil,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import App from "./App";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import Edit from "./components/edit/Edit";
import Login from "./components/login/Login";

library.add(faBook, faHouse, faMagnifyingGlass, faUser, faPencil);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
			<Route path="/" element={<Navigate replace to="/home" />} />
      <Route element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="search" element={<Search />} />
				<Route path="edit" element={<Edit />} />
				<Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
