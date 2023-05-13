import React from "react";
import "./Bannar.css";
const Bannar = () => {
  return (
    <div class="slider">
      <div class="container">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators mt-5">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row d-flex align-items-center">
                <div class="col-md-4 offset-md-1">
                  <div class="slider-info">
                    <h1>Mackbook Pro</h1>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature.
                    </p>
                    <a href="" class="buy-btn">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row d-flex align-items-center">
                <div class="col-md-4 offset-md-1">
                  <div class="slider-info">
                    <h1>Speeker</h1>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature.
                    </p>
                    <a href="" class="buy-btn">
                      Buy Now
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
