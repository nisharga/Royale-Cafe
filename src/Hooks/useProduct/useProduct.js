import { useEffect, useState } from "react";

const useProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const url = "https://glue-gun-server.onrender.com/allproduct";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [setProduct]);

  return [product];
};

export default useProduct;
