import React from "react";
import "./BestSell.css";
const BestSell = () => {
  return (
    <div class="catogary ">
      <div class="container">
        <div class="row">
          <div class="col-md-4 py-5">
            <div class="cat1 d-flex justify-content-between d-flex align-items-center">
              <h1>Watch</h1>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/76/Nitro_Cold_Brew.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-4 py-5">
            <div class="cat2 d-flex justify-content-between d-flex align-items-center">
              <h1>Bag</h1>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/76/Nitro_Cold_Brew.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="col-md-4 py-5">
            <div class="cat3 d-flex justify-content-between d-flex align-items-center">
              <h1>Shoes</h1>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/76/Nitro_Cold_Brew.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSell;
