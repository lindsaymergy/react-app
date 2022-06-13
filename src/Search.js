import React, { useState, useEffect } from "react";
import Restaurants from "./data.json"

// Using Olo's API, please create an screen that allows a user to search for a Five Guys location by zip code, 
// displaying them in order of distance from the search location.


function Search() {
  let restaurantsArray = Restaurants["restaurants"];
  state = {
    query: "",
    zipcodes: []
  }

  onChange = e => {
    const { value } = e.target;
    this.setState({
      query: value
    });

    this.search(value);
  };

  return (
    <div className="Search">
      <input
        type="text"
        className="search-box"
        placeholder="Search for..."
        onChange={this.onChange}
      ></input>
      <ul>
        {restaurantsArray.map((el, i) => <li key={i}>{JSON.stringify(el.name)}</li>)}
      </ul>
    </div>
  )
}

export default Search;