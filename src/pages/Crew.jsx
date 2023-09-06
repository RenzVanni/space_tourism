import { useState, useEffect } from "react";
function Crew({ data }) {
  const [crew, setCrew] = useState(data);
  const [person, setPerson] = useState(data[0]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    console.log(person);
  }, [person]);

  return (
    <div className="crew">
      <p className="pick">
        <span>02</span> PICK YOUR DESTINATION
      </p>

      <div className="information-container">
        <div className="image-container">
          <img src={person.images.png} alt={person.name} />
        </div>

        <div className="context-container">
          <ul>
            {crew.map((crewCount, index) => {
              return (
                <li
                  key={crewCount.name}
                  onClick={() => {
                    setPerson(crew[index]);
                    setActive(index);
                  }}
                >
                  <div
                    style={{
                      backgroundColor: active === index ? "#fff" : "#383b4b",
                    }}
                  ></div>
                </li>
              );
            })}
          </ul>
          <div className="sub-container">
            <h4>{person.role}</h4>
            <h3>{person.name}</h3>
            <p>{person.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
