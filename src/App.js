/* eslint-disable require-jsdoc */
import "./App.css";
import React from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import Products from "./components/products";
import Featured from "./components/featured";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Products />
      <Featured />
      <Footer />
    </React.Fragment>
  );
}

export default App;
