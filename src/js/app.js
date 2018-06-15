// @flow
import React from "react";
import ReactDOM from "react-dom";

import Root from "./components/root";

const element = document.getElementById("app");
element && ReactDOM.render(<Root/>, element);