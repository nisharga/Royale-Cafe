import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
const LogoArea = () => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="footer-about">
        <Link to="/" className="navbar-brand">
          <h3 className="mb-2">
            <FontAwesomeIcon icon="coffee" /> ROYALE-CAFE
          </h3>
        </Link>
        <p>
          There's nothing like a good cup of coffee to boost energy and spirits,
          and at Lazy Creek Coffee, we know our joe. We are dedicated to
          supplying offices and restaurants with top-quality coffee.
        </p>
      </div>
    </div>
  );
};

export default LogoArea;
