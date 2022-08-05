import React, { useState } from "react";

function App() {
  const [dropdown, setdropdown] = useState(0);
  const dropdownList = ["Tesla", "Volvo", "Mercedes"];

  const dropdownListClick = (index) => {
    setdropdown(index);
  };

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {dropdownList[dropdown]}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {dropdownList.map((value, index) => {
            return (
              <>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => dropdownListClick(index)}
                  key={index}
                >
                  {value}
                </a>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
