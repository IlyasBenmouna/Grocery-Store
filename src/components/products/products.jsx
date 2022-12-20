import React from "react";
import { productList } from "utilities/mockProductList";
import Carousel from "../carousel/carousel";
import CategoryTile from "../general/categoryTile";

const Products = () => {
  return (
    <div>
      <section className="carousel">
        <div className="carousel-head">
          <div className="head-left">
            <h2>Explore Categories</h2>
          </div>
          <div className="head-right">
            <h3>All</h3>
            <h4>Vegetables</h4>
            <h4>Fruits</h4>
            <h4>Coffee & Teas</h4>
            <h4>Meat</h4>
          </div>
        </div>

        <Carousel>
          {productList.map((product, i) => (
            <CategoryTile
              key={i}
              name={product.name}
              stock={product.stock}
              image={product.image}
            />
          ))}
        </Carousel>
      </section>
    </div>
  );
};

export default Products;
