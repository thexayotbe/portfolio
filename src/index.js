import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Container } from "./Components/Generic/styles";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Container>
    <App />
  </Container>
);
