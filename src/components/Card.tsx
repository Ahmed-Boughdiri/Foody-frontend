import React from "react";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

const Card: React.FC<any> = ({ name, image, desc }) => {
  return (
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={image} alt="" />
            <span className="card-title">{name}</span>
            <a
              className="btn-floating halfway-fab waves-effect waves-light red"
              href="#!"
            >
              <i className="material-icons">add</i>
            </a>
          </div>
          <div className="card-content">
            <p>
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
