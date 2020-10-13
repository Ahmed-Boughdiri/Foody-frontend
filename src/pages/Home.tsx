import React from "react";
import "../layout/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-des">
        <h2>The Best Place For Ordering Food </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          earum impedit iusto laudantium nisi, dicta voluptas ex, non eos, ipsam
          tempora. Ut sunt nemo aliquam eligendi iure a saepe voluptates.
        </p>
        <div className="btns">
            <button className="home-btn z-depth-1">Get Started</button>
            <button className="home-btn">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
