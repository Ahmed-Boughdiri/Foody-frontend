import React from "react";
import "../layout/Search.css";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { foodList } from "../global/Food";

const Search = () => {
  return (
    <div>
      <SearchBar />
      <div className="search-results">
        <div className="search-results.conatiner">
            {foodList.map((food) => (
                <div className="card">
                    <Card
                    name={food.name}
                    image={food.name}
                    desc={food.desc}
                    key={food.id}
                    />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
