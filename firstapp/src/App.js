import React from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import ArayObj from "./ArayObj";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProductList />
      <ArayObj />
    </div>
  );
};

export default App;
