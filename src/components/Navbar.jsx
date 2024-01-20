import { NavLink } from "react-router-dom";
import ActiveNavBar from "./ActiveNavBar";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
function Navbar() {
  const [close, setClose] = useState(true);
  const [offSetStyle, setOffSetStyle] = useState({ offLeft: 0, offWidth: 0 });
  const [styleThis, setStyleThis] = useState({ left: "", width: "" });

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setOffSetStyle({
        offLeft: ref.current.offsetLeft,
        offWidth: ref.current.offsetWidth,
      });
    }
  }, [ref]);

  useEffect(() => {
    setStyleThis({
      left: `${offSetStyle.offLeft}px`,
      width: `${offSetStyle.offWidth}px`,
    });
  }, [offSetStyle]);

  const underline = (e) => {
    console.log(e.target);
    setOffSetStyle((prev) => ({
      ...prev,
      offLeft: e.target.offsetLeft,
      offWidth: e.target.offsetWidth,
    }));
    setStyleThis({
      left: `${offSetStyle.offLeft}px`,
      width: `${offSetStyle.offWidth}px`,
    });
    console.log(styleThis);
  };
  return (
    <div className="navbar">
      <div className="logo-container">
        <motion.img
          initial={{ rotate: 0 }}
          animate={{ rotate: "360deg" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            type: "spring",
          }}
          src="/assets/shared/logo.svg"
          alt="logo"
        />
      </div>
      <div className="nav">
        <NavLink ref={ref} onClick={(e) => underline(e)} to="/">
          Home
        </NavLink>
        <NavLink onClick={(e) => underline(e)} to="destination">
          Destination
        </NavLink>
        <NavLink onClick={(e) => underline(e)} to="crew">
          Crew
        </NavLink>
        <NavLink onClick={(e) => underline(e)} to="technology">
          Technology
        </NavLink>
        <hr style={styleThis} />
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
