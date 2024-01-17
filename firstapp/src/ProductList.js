import Product from "./Product";
import Button from "./Button";

const ProductList = () => {
  let productss = [
    {
      id:1,
      name: "Sumsung M14 5G",
      price: "10,999",
      url: "https://m.media-amazon.com/images/I/81pmO0iVNhL._SL1500_.jpg",
    },
    {
      id:2,
      name: "OPPO A18",
      price: "9,999",
      url: "https://m.media-amazon.com/images/I/81pmO0iVNhL._SL1500_.jpg",
    },
    {
      id:3,
      name: "POCO C55",
      price: "6,499",
      url: "https://m.media-amazon.com/images/I/51TJ-EVSx4L.jpg",
    },
    {
      id:4,
      name: "OPPO A79 5G",
      price: "19,999",
      url: "https://m.media-amazon.com/images/I/81JY6TWuFjL._SL1500_.jpg",
    },
    {
      id:5,
      name: "iQOO Z6 Lite 5G",
      price: "12,999",
      url: "https://m.media-amazon.com/images/I/61VbKHdE0rL._SL1200_.jpg",
    },
    {
      id:6,
      name: "Samsung Galaxy A53",
      price: "32,999",
      url: "https://m.media-amazon.com/images/I/41ujQeupYSL.jpg",
    },
    {
      id:7,
      name: "iQOO 12 5G",
      price: "57,999",
      url: "https://m.media-amazon.com/images/I/619lW2YtVhL._SL1200_.jpg",
    },
    {
      id:8,
      name: "Samsung Galaxy M34",
      price: "17,999",
      url: "https://m.media-amazon.com/images/I/91ItZJh1FDL._SL1500_.jpg",
    },
  ];

  return (
    <main className="productList uniPadding">
      <h2 className="heading">Products</h2>
      <div className="product">
        {productss.map((products) => {
          return (
            <div key={products.id}>
              <Product
                name={products.name}
                price={products.price}
                url={products.url}
              />
            </div>
          );
        })}
      </div>
      <div className="btnBox uniPadding">
        <Button
          btnName="Click Here"
          eventName={() => {
            alert(`hello Sunil`);
          }}
        />
      </div>
    </main>
  );
};

export default ProductList;
