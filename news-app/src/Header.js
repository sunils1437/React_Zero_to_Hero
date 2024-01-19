import { useState } from "react";
const Header = ({ updateSharedData }) => {
  const [dataToSend, setDataToSend] = useState("stock-market");

  const handleSendData = () => {
    // Invoke the callback to update the shared data in the parent
    updateSharedData(dataToSend);
  };

  return (
    <header className="headerBox uniPadding">
      <div className="header">
        <div className="logoHeading">
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"
            alt="LOGO"
          />
          <h1>Times of India News App</h1>
        </div>
        <div className="searchBox">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search News"
            onChange={(e) => {
              if(e.target.value !== ""){
                setDataToSend(e.target.value);
                handleSendData();
              }
              else{
                setDataToSend("stock-market");
                handleSendData();
              }
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
