import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkLogout } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink, useNavigate } from "react-router-dom";

function ProfileButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((store) => store.session.user);
  const ulRef = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    navigate('/')
    closeMenu();
  };

  return (
    <>

      {user ? (
        <div id="profileBtn">
          <div onClick={toggleMenu} id="profileIconContainer">
            <i className="fas fa-user-circle" id="profileIcon"/>
          </div>
          {showMenu && (
            <div className={"profile-dropdown"} ref={ulRef}>
                <div className="profileDropdownContent">
                  <div className="profileDropdownUsername">Hello, {user.username}</div>
                  <div>{user.email}</div>
                  <div>
                    <NavLink to='/business/current' onClick={() => closeMenu()}>Manage Businesses</NavLink>
                  </div>
                  <NavLink to='/review/current' onClick={() => closeMenu()}>Manage Reviews</NavLink>
                  <div>
                    <button onClick={logout}>Log Out</button>
                  </div>
                </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div id="navUserBtns">
            <OpenModalMenuItem
              itemText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
            <OpenModalMenuItem
              itemText="Sign Up"
              className='redBtn'
              id='signupBtn'
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </div>
        </div>

      )}

    </>

  );
}

export default ProfileButton;
