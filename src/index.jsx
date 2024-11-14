import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import React from "react";

const entryPoint = document.getElementById("root");
// using JSX <App />
ReactDOM.createRoot(entryPoint).render(<App />);

// using React.createElement(App) 
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));
