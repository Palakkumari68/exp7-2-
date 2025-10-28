import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.name} style={{ marginBottom: "10px" }}>
            {item.name} (${item.price}){" "}
            <input
              type="number"
              value={item.quantity}
              min="1"
              style={{ width: "50px" }}
              onChange={(e) =>
                dispatch(
                  updateQuantity({ name: item.name, quantity: +e.target.value })
                )
              }
            />
            <button onClick={() => dispatch(removeFromCart(item.name))}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
