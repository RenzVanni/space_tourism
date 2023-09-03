import React from "react";

function Destination() {
  return (
    <div className="destination">
      <div className="left-container">
        <p className="pick">
          <span>01</span> PICK YOUR DESTINATION
        </p>

        <div className="image-container">
          <img src="../../public/assets/destination/image-moon.png" alt="" />
        </div>
      </div>

      <div className="right-container">
        <ul>
          <li>MOON</li>
          <li>MARS</li>
          <li>EUROPA</li>
          <li>TITAN</li>
        </ul>

        <h3>MOON</h3>

        <p className="context">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>

        <hr />

        <div className="more">
          <div className="section1">
            <p className="text">AVG. DISTANCE</p>
            <h4 className="distance">384,400 KM</h4>
          </div>
          <div className="section2">
            <p className="text">EST. TRAVEL TIME</p>
            <h4 className="time">3 DAYS</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
