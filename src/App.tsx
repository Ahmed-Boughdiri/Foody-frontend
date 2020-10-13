import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Search from "./pages/Search";
import Likes from "./pages/Likes";
import Delivery from "./pages/Delivery";
import Logout from "./pages/Logout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/Likes" component={Likes} />
        <Route exact path="/Delivery" component={Delivery} />
        <Route exact path="/Logout" component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
