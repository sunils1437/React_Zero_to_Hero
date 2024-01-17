import "./ArayObj.css";

const ArayObj = () => {
  let countries = [
    { name: "India", capital: "New Delhi" },
    { name: "South Africa", capital: "Cape Town" },
    { name: "New Zealand", capital: "Wellington" },
    { name: "India", capital: "New Delhi" },
    { name: "South Africa", capital: "Cape Town" },
    { name: "New Zealand", capital: "Wellington" },
    { name: "India", capital: "New Delhi" },
    { name: "South Africa", capital: "Cape Town" },
    { name: "New Zealand", capital: "Wellington" },
    { name: "India", capital: "New Delhi" },
    { name: "South Africa", capital: "Cape Town" },
    { name: "New Zealand", capital: "Wellington" },
    { name: "India", capital: "New Delhi" },
    { name: "South Africa", capital: "Cape Town" },
    { name: "New Zealand", capital: "Wellington" },
  ];

  return (
    <div className="arayObj uniPadding">
      {countries.map((country,index) => {
        return (
          <div className="data" key={index}>
            <h3>{country.name}</h3>
            <h3>{country.capital}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ArayObj;
