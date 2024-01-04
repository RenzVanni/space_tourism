import { NavLink } from "react-router-dom";
import ActiveNavBar from "./ActiveNavBar";
import { useState } from "react";
function Navbar() {
  const [close, setClose] = useState(true);

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="/assets/shared/logo.svg" alt="logo" />
      </div>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="destination">Destination</NavLink>
        <NavLink to="crew">Crew</NavLink>
        <NavLink to="technology">Technology</NavLink>
      </div>
      <div className="hamburger-container">
        <img
          onClick={() => setClose(false)}
          src="/assets/shared/icon-hamburger.svg"
          alt="hamburger-icon"
        />
      </div>
      <ActiveNavBar close={close} setClose={setClose} />
    </div>
  );
}

export default Navbar;
