import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  return (
    <div id="navContainer">
      <div id="homeBtn">
        <NavLink to="/">Home</NavLink>
      </div>
      <div id="rightSideNav">
        <NavLink to='/business/new' id="addBusinessNavBtn">Add a Business</NavLink>
        <ProfileButton />
      </div>
    </div>

  );
}

export default Navigation;
