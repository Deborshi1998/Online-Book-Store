import React, { useState, useEffect } from "react";

import { getProducts } from "./helper/coreapicalls";
import Base from "./Base";

import "../styles.css";
import Card from "./Card";
//default homme component
export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  //loading all the products on the homepage .
  const loadAllProducts = () => {
    getProducts()
      .then((data) => {
        if (data.error) {
          setError(data.error);
          console.log(error);
        } else {
          setProducts(data);
        }
      });
  };

  useEffect(() => {
    loadAllProducts();
  });

  return (
    <Base title="Home Page" description="Welcome to Online Book store" className="bg-white">
      <h1 className="text-primary">Books</h1>
      <div className="row">
        {products.map((product, index) => {
          return (
            <div key={index} className="col-3">
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </Base>
  );
}
