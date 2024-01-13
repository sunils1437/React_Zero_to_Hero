const Product = (props) => {
  return (
    <div className="productBox">
      <div className="productImg">
        <img src={props.url} alt="Product IMG" />
      </div>
      <h3>{props.name}</h3>
      <h4>₹ {props.price}</h4>
    </div>
  );
};

export default Product;
