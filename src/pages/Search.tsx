import React from "react";
import "../layout/Search.css";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { foodList } from "../global/Food";
import Footer from "../components/Footer";


const Search = () => {
  return (
    <div className="search">
      <SearchBar />
      <div className="search-results-container">
        {
          foodList.map(food =><Card name={food.name} desc={food.desc} image={food.image} />)
        }
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Search;
