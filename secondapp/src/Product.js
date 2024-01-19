import { useState, useEffect } from "react";

const Product = () => {
  // 1. by default it is called for evert render and rerender.
  // 2. you can it from grtting called on rerender by passing a blank array.
  // 3. you can also pass variable in array for which particular rerender you wamt to call it.

  let [name, setName] = useState("Saurabh");

  let [age, setAge] = useState(27);

  useEffect(() => {
    console.log("Component Rendered");
  }, [age]);

  return (
    <div className="product">
      <h2>Samsung A53</h2>
      <h3>{name}</h3>
      <button
        onClick={() => {
          setName("Sunil");
        }}
      >
        Click
      </button>
      <h3>{age}</h3>
      <button
        onClick={() => {
          setAge(24);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Product;
