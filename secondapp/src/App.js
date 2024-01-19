// import { useState } from "react";
import { useEffect, useState } from "react";
import "./App.css";
// import Product from "./Product";

function App() {
  // let [productVisible, setProductVisible] = useState(false);

  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <div className="users">
        {users.map((user) => {
          return (
            <div className="userBox" key={user.id}>
              <h1>{user.name}</h1>
              <h2>{user.email}</h2>
              <h3>{user.address.city}</h3>
            </div>
          );
        })}
      </div>

      {/* <button
        onClick={() => {
          setProductVisible(true);
        }}
      >
        Show Product
      </button>
      <button
        onClick={() => {
          setProductVisible(false);
        }}
      >
        Hide Product
      </button>
      {productVisible ? <Product /> : null} */}
    </div>
  );
}

export default App;
