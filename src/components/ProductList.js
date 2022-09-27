import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return <p>{product.title}</p>;
      })}
    </div>
  );
};

export default ProductList;
