import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Container } from "./Components/Generic/styles";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Container>
      <Root />
    </Container>
  </BrowserRouter>
);
