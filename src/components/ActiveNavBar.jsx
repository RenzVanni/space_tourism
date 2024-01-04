import { useState } from "react";
import { NavLink } from "react-router-dom";

const ActiveNavBar = ({ close, setClose }) => {
  const [underlineStyle, setUnderlineStyle] = useState({
    top: 0,
    height: 0,
  });

  const indicator = (e) => {
    console.log(e.target);
    const { offsetTop, offsetHeight } = e.target;
    setUnderlineStyle({ top: `${offsetTop}px`, height: `${offsetHeight}px` });
  };

  return (
    <div
      className="activeNavBar"
      style={{ transform: close ? "translateX(999px)" : "translateX(0)" }}
    >
      <div className="close-icon">
        <img
          src="/assets/shared/icon-close.svg"
          alt="close-icon"
          onClick={() => setClose(true)}
        />
      </div>
      <div className="options">
        <ul>
          <li>
            <NavLink to="/">
              <input
                type="radio"
                onClick={(e) => indicator(e)}
                name="navigation"
                id="home"
              />
              <label htmlFor="home">
                <span>00</span> HOME
              </label>
            </NavLink>
          </li>
          <li>
            <NavLink to={"destination"}>
              <input
                type="radio"
                onClick={(e) => indicator(e)}
                name="navigation"
                id="destination"
              />
              <label htmlFor="destination">
                <span>01</span> DESTINATION
              </label>
            </NavLink>
          </li>
          <li>
            <NavLink to={"crew"}>
              <input
                type="radio"
                onClick={(e) => indicator(e)}
                name="navigation"
                id="crew"
              />
              <label htmlFor="crew">
                <span>02</span> crew
              </label>
            </NavLink>
          </li>
          <li>
            <NavLink to={"technology"}>
              <input
                type="radio"
                onClick={(e) => indicator(e)}
                name="navigation"
                id="technology"
              />
              <label htmlFor="technology">
                <span>03</span> technology
              </label>
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default ActiveNavBar;
