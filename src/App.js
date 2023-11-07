// import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchListing from "./components/SearchListing";
import Shipment from "./components/Shipment";
import Header from "./components/Header";

function App(props) {
  const view = useSelector(state=>state.view.viewShipment)
  const [results, setResults] = useState();
  // const [viewShipment, setViewShipment] = useState(false);

  // const handleViewShipment = ()=>{
  //   setViewShipment(true);
  // }

  console.log("App is running");
  console.log("Result in App", results);
  return (
    <div className="App">
      <Header/>
      <div className="search-bar-container">
        {!view && <SearchBar setResults={setResults} />}
        {results && results.length > 0 && !view && (
          <SearchListing results={results} />
        )}
        {view && <Shipment />}
      </div>
    </div>
  );
}

export default App;
