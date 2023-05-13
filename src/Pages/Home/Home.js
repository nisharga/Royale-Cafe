import React from "react";
import Bannar from "./Bannar/Bannar";
import CoffeeSection from "./CoffeeSection/CoffeeSection";
import BestSell from "./BestSell/BestSell";

const Home = () => {
  return (
    <div>
      <Bannar />
      <BestSell />
      <CoffeeSection />
    </div>
  );
};

export default Home;
