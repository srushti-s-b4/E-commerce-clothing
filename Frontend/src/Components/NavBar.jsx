import React from "react";
import cart_icon from "../Ecommerce_Assets (1)/Assets/Frontend_Assets/cart_icon.png";
import logo from "../Ecommerce_Assets (1)/Assets/Frontend_Assets/logo.png"
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from '../Context/ShopContext'
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(Context);
  const logout = () => {
    setIsLoggedIn(false);
    navigate("/login");
};
  return (
    <div className="h-[10vh] w-[100%] flex justify-between items-center bg-amber-200 px-2">
      <div className="font-bold text-2xl flex justify-center items-center">
        <img src={logo} alt="" />
        <p>
          ASYNC
        </p>
      </div>

      <ul className="flex justify-center items-center gap-4 font-bold text-2xl">
        <NavLink to="/"><li>Shop</li></NavLink>
        <NavLink to="/men"><li> Men</li></NavLink>
        <NavLink to="/women"><li>Women</li></NavLink>
        <NavLink to="/kids"><li> Kids</li></NavLink>
      </ul>
      <div className="flex justify-center items-center gap-2 font-bold text-2xl">
        {
    !isLoggedIn ? (
        <>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/login">Login</NavLink>
        </>
    ) : (
        <button onClick={logout}>
    Logout
</button>
    )
}
        <div>
            <NavLink to="/cart"><img src={cart_icon} alt="cart"/></NavLink>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;