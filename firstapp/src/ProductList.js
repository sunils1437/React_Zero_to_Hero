import Product from "./Product";

const ProductList = () => {
  const doSomething = (obj) => {
    alert(`hello ${obj}`);
  };

  return (
    <main className="productList uniPadding">
      <h2 className="heading">Products</h2>
      <div className="product">
        <Product
          name="Sumsung M14 5G"
          price="10,999"
          url="https://m.media-amazon.com/images/I/81pmO0iVNhL._SL1500_.jpg"
        />
        <Product
          name="OPPO A18"
          price="9,999"
          url="https://m.media-amazon.com/images/I/814PMi9fq2L._SL1500_.jpg"
        />
        <Product
          name="POCO C55"
          price="6,499"
          url="https://m.media-amazon.com/images/I/51TJ-EVSx4L.jpg"
        />
        <Product
          name="OPPO A79 5G"
          price="19,999"
          url="https://m.media-amazon.com/images/I/81JY6TWuFjL._SL1500_.jpg"
        />
        <Product
          name="iQOO Z6 Lite 5G"
          price="12,999"
          url="https://m.media-amazon.com/images/I/61VbKHdE0rL._SL1200_.jpg"
        />
        <Product
          name="Samsung Galaxy A53"
          price="32,999"
          url="https://m.media-amazon.com/images/I/41ujQeupYSL.jpg"
        />
        <Product
          name="iQOO 12 5G"
          price="57,999"
          url="https://m.media-amazon.com/images/I/619lW2YtVhL._SL1200_.jpg"
        />
        <Product
          name="Samsung Galaxy M34"
          price="17,999"
          url="https://m.media-amazon.com/images/I/91ItZJh1FDL._SL1500_.jpg"
        />
      </div>
      <div className="btnBox uniPadding">
        <button
          onClick={() => {
            doSomething("Sunil");
          }}
        >
          Click Here
        </button>
      </div>
    </main>
  );
};

export default ProductList;
