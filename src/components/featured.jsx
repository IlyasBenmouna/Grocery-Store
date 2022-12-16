import React from "react";
import { productList } from "utilities/mockProductList";
import Carousel from "./general/carousel";
import FeaturedTile from "./general/featuredTile";

const Featured = () => {
  return (
    <div>
      <section className="carousel-featured">
        <div className="carousel-head">
          <div className="head-left">
            <h2>Featured Products</h2>
          </div>
          <div className="head-right">
            <h4>All</h4>
            <h3>Vegetables</h3>
            <h4>Fruits</h4>
            <h4>Coffee & Teas</h4>
            <h4>Meat</h4>
          </div>
        </div>
        <Carousel>
          {productList.map((product, i) => (
            <FeaturedTile
              key={i}
              name={product.name}
              stock={product.stock}
              image={product.image}
              weight={product.weight}
              supplier={product.supplier}
              currentPrice={product.currentPrice}
              oldPrice={product.oldPrice}
            />
          ))}
        </Carousel>
        ;
      </section>
    </div>
  );
};

export default Featured;
