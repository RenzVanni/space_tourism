import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ActiveNavBar from "../components/ActiveNavBar";

function SharedLayout() {
  return (
    <>
      <Navbar />
      {/* <ActiveNavBar /> */}
      <Outlet />
    </>
  );
}

export default SharedLayout;
