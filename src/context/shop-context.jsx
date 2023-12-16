import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (response.ok) {
          const data = await response.json();
          setProducts(data.products);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProducts();
  }, []);

  const getDefaultCart = () => {
    let cart = {};
    for (const product of products) {
      cart[product.id] = 0;
    }
    return cart;
  };

  useEffect(() => {
    // When products change, update the cart
    setCartItems(getDefaultCart());
  }, [products]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = products.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (product) => {
    setCartItems((prev) => ({ ...prev, [product.id]: prev[product.id] + 1 || 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const removeFromCart = (itemId) => {
    const updatedCart = { ...cartItems };
    delete updatedCart[itemId];
    setCartItems(updatedCart);
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    products,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
