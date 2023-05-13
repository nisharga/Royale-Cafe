import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Address = () => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="address">
        <h2>Address</h2>
        <div className="address-links">
          <li className="address1">
            <span>
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            </span>
            Level-4, 34, Awal Centre, Banani, Dhaka 1200, Bangladesh
          </li>
          <li className="address1">
            <span>
              <FontAwesomeIcon icon="fa-solid fa-phone" /> +8801774655873
            </span>
          </li>
          <li className="address1">
            <span>
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
            </span>
            kabirnisharga@gmail.com
          </li>
        </div>
      </div>
    </div>
  );
};

export default Address;
