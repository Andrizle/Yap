import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { useSelector } from "react-redux";

function Navigation() {
  const sessionUser = useSelector(state => state.session.user)

  return (
    <div>
      <div id="navContainer">
        <div id="homeBtn">
          <NavLink to="/">
            <img src='/yap logo.png' id="webLogo" />
          </NavLink>
        </div>
        <div id="searchBarContainer">
          <div id="searchBarDiv" target={document.getElementById('searchInput')}>
            <label id="searchInputContainer"
              onClick={() => {throw alert('Feature coming soon')}}>
              <input
                type="text"
                placeholder="Restaurants,   automotive ..."
                id="searchInput"
                name="searchInput"
                onClick={e => console.log(e)}/>
            </label>
            <div id="searchBtnContainer">
              <button id="searchBtn"
                onClick={() => {throw alert('Feature coming soon')}}>
                <svg width="24" height="24" className="icon_svg" id="searchIcon">
                  <path d="m21.853 20.355-3.444-3.443a9.428 9.428 0 1 0-16.761-6.171 9.428 9.428 0 0 0 15.348 7.586l3.443 3.442a1 1 0 1 0 1.414-1.414ZM5.82 16.245a7.429 7.429 0 1 1 5.253 2.175 7.38 7.38 0 0 1-5.253-2.176Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div id="rightSideNav">
          {sessionUser && <NavLink to='/business/new' id="addBusinessNavBtn">Add a Business</NavLink>}
          <ProfileButton />
        </div>
        {/* <div id="navBottomDiv"></div> */}
      </div>
      <div id="navBarDivider"></div>
    </div>

  );
}

export default Navigation;
