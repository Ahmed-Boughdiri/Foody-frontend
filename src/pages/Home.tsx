import React,{ useState, useEffect } from "react";
import "../layout/Home.css";
import "../mobile/Home.css";
import { loginWithToken } from "../global/Auth";
import { getToken } from "../global/SaveToken";

const Home:React.FC<any> = ({ history }) => {
  const [show,setShow] = useState(false);
  const checkToken = async() =>{
    if(!getToken) {
      setShow(true);
    } else {
      const res = await loginWithToken(getToken);
      if(res === true) {
        history.push("/search");
      } else {
        setShow(true)
      }
    }
  }
  useEffect(() =>{
    checkToken()
    console.log("Working ...")
  })
  return (
    <div>
      {
        show && (
          <div className="home">
            <div className="home-des">
              <h2>The Best Place For Ordering Food </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
                earum impedit iusto laudantium nisi, dicta voluptas ex, non eos, ipsam
                tempora. Ut sunt nemo aliquam eligendi iure a saepe voluptates.
              </p>
              <div className="btns">
                  <button className="home-btn" onClick={() =>history.push("/login")}>Get Started</button>
                  <button className="home-btn" onClick={() =>history.push("/register")}>Register</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Home;
