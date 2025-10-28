import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div style={{ textAlign: "center", border: "1px solid black", margin: "20px", padding: "20px" }}>
      <h1>My Shop</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
