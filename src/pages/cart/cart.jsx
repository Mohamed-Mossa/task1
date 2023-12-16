import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart.css";

export const Cart = () => {
  const {
    cartItems,
    getTotalCartAmount,
    checkout,
    products,
    updateCartItemCount,
    removeFromCart,
  } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const handleRemoveFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      updateCartItemCount(cartItems[itemId] - 1, itemId);
    }
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {Object.keys(cartItems).map((itemId) => {
          const product = products.find((p) => p.id === parseInt(itemId));
          if (cartItems[itemId] > 0 && product) {
            return (
              <div key={itemId} className="cart-item">
                <img src={product.images[0]} alt={product.name} />
                <div className="description">
                  <p>
                    <b>{product.title}</b>
                  </p>
                  <p>Price: ${product.price}</p>
                </div>
                <div className="countHandler">
                  <button onClick={() => handleRemoveFromCart(itemId)}>
                    -
                  </button>
                  <input
                    type="number"
                    value={cartItems[itemId]}
                    onChange={(e) =>
                      updateCartItemCount(parseInt(e.target.value), itemId)
                    }
                  />
                  <button onClick={() => updateCartItemCount(cartItems[itemId] + 1, itemId)}>
                    +
                  </button>
                  <button onClick={() => removeFromCart(itemId)}>
                    Remove
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={checkout}>Checkout</button>
          <button onClick={checkout}>Empty</button>
        </div>
        
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
