import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Jumbotron />
      </div>
    </Fragment>
  );
}

export default App;
