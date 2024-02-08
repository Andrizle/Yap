import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import logo from '../../../public/yap logo.png'
import "./Navigation.css";
import { useSelector } from "react-redux";

function Navigation() {
  const sessionUser = useSelector(state => state.session.user)
  return (
    <div id="navContainer">
      <div id="homeBtn">
        <NavLink to="/">
          <img src={logo} id="webLogo" />
        </NavLink>
      </div>
      <div id="rightSideNav">
        {sessionUser && <NavLink to='/business/new' id="addBusinessNavBtn">Add a Business</NavLink>}
        <ProfileButton />
      </div>
    </div>

  );
}

export default Navigation;
