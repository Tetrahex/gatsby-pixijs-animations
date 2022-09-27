import * as React from "react";
import type { HeadFC } from "gatsby";
import Header from "../components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export const homeDiv = {
  // margin: "8px",
};

const Home = () => {
  return (
    <main style={homeDiv}>
      <Header />
    </main>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Home Page</title>;
