import { useState } from "react";
import Button from './Button';

const Product = (props) => {

  let [isAvailable, setIsAvailable] = useState("Yes");

  return (
    <div className="productBox">
      <div className="productImg">
        <img src={props.url} alt="Product IMG" />
      </div>
      <h3>{props.name}</h3>
      <h4>₹ {props.price}</h4>
      <p>{isAvailable}</p>
      <Button btnName="Click" eventName={()=>{
        setIsAvailable("No")
      }}/>
    </div>
  );
};

export default Product;
