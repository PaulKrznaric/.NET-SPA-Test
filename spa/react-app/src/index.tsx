import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Button } from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
