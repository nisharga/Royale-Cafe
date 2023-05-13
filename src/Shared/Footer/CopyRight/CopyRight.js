import React from "react";
import { Link } from "react-router-dom";
const CopyRight = () => {
  return (
    <div id="copy-right">
      <div className="copy-right-sec">
        <i className="fa-solid fa-copyright"></i>
        All rights reserved 2023 Powerd By. <Link to="/">Royale Cafe</Link>
      </div>
    </div>
  );
};

export default CopyRight;
