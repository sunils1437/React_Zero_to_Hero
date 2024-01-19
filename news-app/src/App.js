import {useState} from 'react'
import Header from './Header';
import NewsSection from './NewsSection';
import './App.css';

function App() {
  const [sharedData, setSharedData] = useState("stock-market");
  const updateSharedData = (data) => {
    setSharedData(data);
  };
  return (
    <div className="App">
      <Header updateSharedData={updateSharedData} />
      <NewsSection sharedData={sharedData} />
    </div>
  );
}

export default App;
