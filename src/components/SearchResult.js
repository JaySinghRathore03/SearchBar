import React, { useState } from "react";

import './SearchResult.css'
import { useDispatch } from "react-redux";
import { viewActions } from "../store/viewSlice";
const SearchResult = (props) => {
    // const [view,setView]=useState(false);
  const dispatch = useDispatch();
    const handleView= ()=> {
        if(props.result === "Shipment")
        dispatch(viewActions.viewShipmentDetails())
        // props.view(true);
    }

  return (
    <div
      className="search-result"
      onClick={handleView}
    >
      {props.result}
    </div>
  );
};

export default SearchResult;
