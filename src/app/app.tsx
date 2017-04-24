import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./views/hello-world";

ReactDOM.render(
  <Hello to="World"/>,
  document.getElementById("app")
);
