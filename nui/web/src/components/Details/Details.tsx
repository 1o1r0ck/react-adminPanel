import "./Details.css";
import Info from "./Info";
import Action from "../../detailsComponent/Action";
import AdminFlex from "../../detailsComponent/AdminFlex";
import Roles from "../../detailsComponent/Roles";
import Experemental from "../../detailsComponent/Experemental";

import { useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Details = () => {

  const [link, setLink] = useState(0)

  const onClickLink = (index : any) =>{
    setLink(index); 
  };

  return (
    <Router>
      <div className="container">
        <div className="menu">
          <Link to="/info" onClick={() => onClickLink(0)} className = {link === 0 ? 'active' : ''}>
            Info
          </Link>

          <Link to="/admin" onClick={() => onClickLink(1)} className = {link === 1 ? 'active' : ''}>
            Admin Flex
          </Link>

          <Link to="/action" onClick={() => onClickLink(2)} className = {link === 2 ? 'active' : ''}>
            Actions
          </Link>

          <Link to="/roles" onClick={() => onClickLink(3)} className = {link === 3 ? 'active' : ''}>
            Roles
          </Link>

          <Link to="/experemental" onClick={() => onClickLink(4)} className = {link === 4 ? 'active' : ''}>
            Experemental
          </Link>
        </div>

        <div className="info">
          <Switch>
            <Route path="/info">
              <Info />
            </Route>

            <Route path="/admin">
              <AdminFlex />
            </Route>

            <Route path="/action">
              <Action />
            </Route>

            <Route path="/roles">
              <Roles />
            </Route>

            <Route path="/experemental">
              <Experemental />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Details;
