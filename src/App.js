import React, { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Smartwatch", price: 5000 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      {/* Store Name Header with Marquee */}
      <header className="header">
        <marquee behavior="scroll" direction="left" scrollamount="10">
          <h1>Pythonlife Store</h1>
        </marquee>
      </header>

      <div className="container">
        <div className="products">
          <h2>Products</h2>
          {products.map((product) => (
            <div key={product.id} className="product">
              <span>{product.name}</span>
              <span>₹{product.price}</span>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>

        <div className="cart">
          <h2>Cart</h2>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;

