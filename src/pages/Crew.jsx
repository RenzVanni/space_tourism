import React from "react";

function Crew() {
  return (
    <div className="crew">
      <p className="pick">
        <span>01</span> PICK YOUR DESTINATION
      </p>

      <div className="information-container">
        <div className="container-1">
          <div className="image-container">
            <img
              src="../../public/assets/crew/image-douglas-hurley.png"
              alt=""
            />
          </div>

          <ul>
            <li>
              <div></div>
            </li>
          </ul>
        </div>

        <div className="container-2">
          <h4>COMMANDER</h4>
          <h3>DOUGLAS HURLEY</h3>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Crew;
