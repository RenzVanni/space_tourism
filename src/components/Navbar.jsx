import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="/public/assets/shared/logo.svg" alt="logo" />
      </div>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="destination">Destination</NavLink>
        <NavLink to="crew">Crew</NavLink>
        <NavLink to="technology">Technology</NavLink>
      </div>
      <div className="hamburger-container">
        <img
          src="/public/assets/shared/icon-hamburger.svg"
          alt="hamburger-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
