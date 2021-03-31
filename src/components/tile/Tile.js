import React from "react";

export const Tile = (props) => {

  let objectArray = Object.values(props.obj);

  return (
    <div className="tile-container">
      <h3>{objectArray[0]}</h3>
      <p>{objectArray[1]}</p>
      <p>{objectArray[2]}</p>
      <p>{objectArray[3]}</p>
      <p>{objectArray[4]}</p>
      <hr></hr>
    </div>
  );
};
