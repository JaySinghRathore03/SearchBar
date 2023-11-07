import React from "react";
import SearchResult from "./SearchResult";

import "./SearchListing.css";

const SearchListing = (props) => {
  return (
    <div className="results-list">
      {props.results.map((result, id) => {
        return (
          <SearchResult
            result={result.first_name}
            id={id}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default SearchListing;
