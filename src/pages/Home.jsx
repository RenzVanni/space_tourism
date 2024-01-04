import { useState } from "react";

function Home() {
  const [opa, setOpa] = useState(true);

  return (
    <div className="home">
      <div className="text-container">
        <h5 style={{ transform: `translateX( ${opa ? "0" : "-999px"})` }}>
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <h1 style={{ transform: `translateY( ${opa ? "0" : "999px"})` }}>
          SPACE
        </h1>
        <p style={{ transform: `translateY( ${opa ? "0" : "999px"})` }}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="explore-button">
        <div className="btn-circle">
          <button
            // style={{
            //   width: opa ? "auto" : "100%",
            //   height: opa ? "auto" : "100%",
            //   position: opa ? "static" : "absolute",
            //   top: "0",
            //   left: "0",
            //   borderRadius: opa ? "100%" : "0",
            // }}
            onClick={() => {
              setOpa((prev) => !prev);
            }}
          >
            EXPLORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
