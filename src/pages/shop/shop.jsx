import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";

export const Shop = () => {
  const { addToCart } = useContext(ShopContext);
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

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Mousa Shop</h1>
      </div>

      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.images[0]} alt={product.name} />
            <div className="description">
           
              <p>
                <b>{product.title}</b>
              </p>
              <p>${product.price}</p>
            </div>
            <button onClick={() => addToCart(product)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};