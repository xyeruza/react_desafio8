import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import iconPizza from "../assets/img/icon-pizza.png";
import iconLockclose from "../assets/img/icon-lockclose.png";
import iconLockkey from "../assets/img/icon-lockkey.png";
import iconLockopen from "../assets/img/icon-lockopen.png";
import iconCart from "../assets/img/icon-cart.png";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import Login from "../pages/Login";

const Navbar = () => {
  
  const { formatted_total } = useContext(CartContext);
  const setActiveClass = ({ isActive }) => (isActive ? "active btnav navbar-brand text-white btn btn-sm" : 'btnav navbar-brand text-white btn btn-sm');
  const { user, logout }   = useContext(UserContext);
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid me-auto">
          <div className="text-white">
            <span>Pizzeria Mamma Mia!</span>
            <NavLink
              to="/"
              className={setActiveClass} 
              id="home"
              
            >
              <img
                src={iconPizza}
                alt="icon pizza"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              Home
            </NavLink>

            {user ? (
              <>
                <NavLink
                  to="/profile"
                  className={setActiveClass} 
                  id="profile"
                  
                >
                  {" "}
                  <img
                    src={iconLockopen}
                    alt="icon lock open"
                    width="30"
                    height="24"
                    className="d-inline-block align-text-top"
                  />
                  Profile
                </NavLink>
                <NavLink
                  to="/login"
                  id="logout"
                  className='btnav navbar-brand text-white btn btn-sm'
                  onClick={logout}
                >
                  <img
                    src={iconLockclose}
                    alt="icon lock close"
                    width="30"
                    height="24"
                    className="d-inline-block align-text-top"
                  />
                  Logout
                </NavLink>{" "}
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  id="login"
                  className={setActiveClass} 
                  
                >
                  <img
                    src={iconLockkey}
                    alt="icon lock key"
                    width="30"
                    height="24"
                    className="d-inline-block align-text-top"
                  />
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  id="register"
                  className={setActiveClass} 
                  
                >
                  <img
                    src={iconLockkey}
                    alt="icon lock key"
                    width="30"
                    height="24"
                    className="d-inline-block align-text-top"
                  />
                  Register
                </NavLink>
              </>
            )}
          </div>
          <div>
            <NavLink
              to="/cart"
              id="total"
              className={setActiveClass} 
              
            >
              <img
                src={iconCart}
                alt="icon cart"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              Total: {formatted_total}
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;