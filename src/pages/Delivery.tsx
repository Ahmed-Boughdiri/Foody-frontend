import React from "react";
import "../layout/Delivery.css";
import SearchBar from "../components/SearchBar";
import { foodList } from "../global/Food";
import Card from "../components/Card";

const Delivery = () =>{
    return(
        <div className="delivery">
            <SearchBar />
            <h2>Delivered Recipes</h2>
            <div className="delivered-recipes">
                {
                    foodList.map(food =><Card name={food.name} image={food.image} desc={food.desc} />)
                }
            </div>
        </div>
    )
}

export default Delivery;
