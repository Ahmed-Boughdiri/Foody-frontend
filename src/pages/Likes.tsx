import React from "react";
import "../layout/Likes.css";
import SearchBar from "../components/SearchBar";
import { foodList } from "../global/Food";
import Card from "../components/Card";

const Likes = () =>{
    return (
        <div className="likes">
            <SearchBar />
            <h2>Liked Recipes</h2>
            <div className="liked-recipes">
                {
                    foodList.map(food =><Card name={food.name} image={food.image} desc={food.desc} />)
                }
            </div>
        </div>
    )
}

export default Likes;
