import React from "react";
import "../layout/SearchBar.css";
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import "../mobile/SearchBar.css";

const SearchBar = () =>{
  return(
    <div className="search-bar">
      <div className="search-bar-container">
        <div className="logo">
          <h1>Foody</h1>
        </div>
        <div className="search-input">
          <div className="input-icon">
            <SearchIcon />
          </div>
          <input placeholder="Search ..." type="text" />
        </div>
        <div className="right-side">
          <div className="search-bar-icon">
            <FavoriteIcon />
          </div>
          <div className="search-bar-icon">
            <LocalShippingIcon />
          </div>
          <div className="search-bar-icon">
            <PersonIcon />
          </div>
        </div>
        <div className="burger-menu">
          <MenuIcon style={{height: "100%",width: "100%",color: "#fff"}} />
        </div>
      </div>
    </div>
  )
}

export default SearchBar;
