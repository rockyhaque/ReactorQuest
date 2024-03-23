import { useEffect, useState } from "react";

const BasicUseEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return <div>{JSON.stringify(data)}</div>;
};

export default BasicUseEffect;
