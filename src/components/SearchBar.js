import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
// import { data } from "./data.js";

import "./SearchBar.css";
import { SearchBarData } from "../data/SearchBarData";

const SearchBar = (props) => {
  const [input, setInput] = useState("");
  //   console.log(data)
  const fetchData = (value) => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((json) => {
    const results = SearchBarData.filter((user) => {
      return (
        value &&
        user &&
        user.first_name &&
        user.first_name.toLowerCase().includes(value)
      );
    });
    console.log("AfterFilter", results);
    props.setResults(results);
  };

  const changeHandler = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type To Search ..."
        onChange={(e) => changeHandler(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
