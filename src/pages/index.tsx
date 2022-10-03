import * as React from "react";
import type { HeadFC } from "gatsby";
import Home from "../components/home";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <main>
      <Home />
    </main>
  );
};

export default App;

export const Head: HeadFC = () => <title>Home Page</title>;
