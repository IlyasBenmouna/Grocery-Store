/* eslint-disable require-jsdoc */
import "./App.css";
import React from "react";
import Header from "./components/header/header";
import Banner from "./components/banner/banner";
import Products from "./components/products/products";
// import Featured from "./components/featured/featured";
import Footer from "./components/footer/footer";
import "./index";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Products />
      {/* <Featured /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
