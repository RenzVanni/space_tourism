import { useState, useEffect } from "react";
import data from "../data.json";
import { motion } from "framer-motion";
function Destination() {
  const [destination, setDestination] = useState(data.destinations[0]);
  const [dataName, setDataName] = useState(data.destinations);
  const [active, setActive] = useState(0);

  useEffect(() => {
    console.log(destination);
  }, [destination]);

  return (
    <div className="destination">
      <div className="left-container">
        <p className="pick">
          <span>01</span> PICK YOUR DESTINATION
        </p>

        <div className="image-container">
          <img src={destination.images.png} alt={destination.name} />
        </div>
      </div>

      <div className="right-container">
        <ul>
          {dataName.map((dats, index) => {
            return (
              <li
                key={dats.name}
                onClick={() => {
                  setDestination(dataName[index]);
                  setActive(index);
                }}
                style={{
                  borderBottom:
                    active === index ? "3px solid var(--primary-3)" : null,
                  color: active === index ? "var(--primary-3)" : null,
                }}
              >
                {dats.name}
              </li>
            );
          })}
        </ul>

        <h3>{destination.name}</h3>

        <p className="context">{destination.description}</p>

        <hr />

        <div className="more">
          <div className="section1">
            <p className="text">AVG. DISTANCE</p>
            <h4 className="distance">{destination.distance}</h4>
          </div>
          <div className="section2">
            <p className="text">EST. TRAVEL TIME</p>
            <h4 className="time">{destination.travel}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
