import React from "react";
import "../layout/Logout.css";
import SearchBar from "../components/SearchBar";

const Logout = () => {
  return (
    <div className="logout">
      <SearchBar />
      <div className="logout-container">
        <div className="logout-wrapper">
          <h4>Logout</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            officiis hic laudantium id quo quaerat minima atque assumenda
            sapiente animi, magni dolor tenetur esse repudiandae harum labore!
            Facilis expedita et alias in distinctio, vero adipisci optio
            eligendi excepturi animi eum dolorum dolorem quas? Quisquam ipsum,
            totam nihil repellat minima suscipit.
          </p>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
