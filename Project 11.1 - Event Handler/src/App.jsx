// eslint-disable-next-line no-unused-vars
import React from "react";
import {} from "bootstrap";
import "./App.css";
import Products from "./Components/Products";
import ProductNav from "./Components/ProductNav";

function App() {
  return (
    <>
      <ProductNav />

      <div className="container">
        <Products />
      </div>
    </>
  );
}

export default App;
