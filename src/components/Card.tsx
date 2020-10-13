import React from "react";
import "../layout/Card.css";
import { Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Card: React.FC<any> = ({ name, image, desc }) => {
  return (
    <div className="card">
      <div className="card-header">
        <Avatar variant="square" style={{borderRadius: "50%"}}>N</Avatar>
        <div className="card-header-detail">
          <h5>{name}</h5>
          <p>Its Very Delicious</p>
        </div>
        <div className="card-header-options">
          <MoreVertIcon />
        </div>
      </div>
      <div className="card-img" style={{backgroundImage: `url(${image})`}}></div>
      <div className="card-detail">
        <h4>Pizza Pour L'achat</h4>
        <p>
          {desc}
        </p>
        <button>Add To The Cart</button>
      </div>
    </div>
  );
};

export default Card;
