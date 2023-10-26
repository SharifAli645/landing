import React from 'react'
import "./Navbar.css"
import { Link, NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function () {
    
  return (
    <div className="nav">
      <Link to={"/"} className="title" activeClassName="active">
        Leveling
      </Link>
      <div className="sections">
        <NavLink to={"/about"} className={"about"} activeClassName="active">
          Feautures
        </NavLink>
        <NavLink to={"/feature"} className={"feat"} activeClassName="active">
          About us
        </NavLink>
      </div>
    </div>
  );
}
