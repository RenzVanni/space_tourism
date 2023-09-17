import { useState } from "react";
function Technology({ data }) {
  const [defaultTech, setDefaultTect] = useState(data[0]);
  console.log(defaultTech);
  return (
    <div className="technology">
      <p className="launch">
        <span>03</span> SPACE LAUNCH 101
      </p>

      <div className="main-context">
        <div className="image-container">
          <img src={defaultTech.images.portrait} alt="Image" />
        </div>

        <ul>
          {data.map((dats, index) => {
            return (
              <li key={index}>
                <div
                  onClick={() => {
                    setDefaultTect(data[index]);
                  }}
                >
                  <p>{index}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="about-tech">
          <h5>THE TECHNOLOGY</h5>

          <h3>{defaultTech.name}</h3>

          <p className="tech-context">{defaultTech.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Technology;
