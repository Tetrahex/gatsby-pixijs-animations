import * as React from "react";
import type { HeadFC } from "gatsby";
import Header from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
// import "pixi-spine";

const App = () => {
  return (
    <main>
      <Home />
    </main>
  );
};

export default App;

export const Head: HeadFC = () => <title>Home Page</title>;
