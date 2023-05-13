import React from "react";
import "./CoffeeSection.css";

const CoffeeSection = () => {
  return (
    <section class="phone-section">
      <div class="container">
        <div class="head d-flex justify-content-between">
          <h2>Menu Item</h2>
          <a href="" class="see-btn mt-2">
            See More
          </a>
        </div>
        <div class="card-deck text-center d-flex">
          <div class="card my-3 mx-2">
            <img
              src="https://images3.alphacoders.com/941/94135.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">iPhone 11 Pro</h5>
              <p class="card-text">
                Some quick example text to build on the card title.
              </p>
              <h2 class="price-tag">$999</h2>
              <a href="" class="buy-btn">
                Buy Now
              </a>
            </div>
          </div>
          <div class="card my-3 mx-2">
            <img
              src="https://images3.alphacoders.com/941/94135.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Samsung Galaxy Note10+</h5>
              <p class="card-text">
                Some quick example text to build on the card title.
              </p>
              <h2 class="price-tag">$799</h2>
              <a href="" class="buy-btn">
                Buy Now
              </a>
            </div>
          </div>
          <div class="card my-3 mx-2">
            <img
              src="https://images3.alphacoders.com/941/94135.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Lenovo R90</h5>
              <p class="card-text">
                Some quick example text to build on the card title.
              </p>
              <h2 class="price-tag">$699</h2>
              <a href="" class="buy-btn">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeSection;
