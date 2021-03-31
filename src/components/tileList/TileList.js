import React from "react";
import {Tile} from '../tile/Tile';

export const TileList = (props) => {
  return (
    <div>
      {props.objArray.map((obj, index)=> <Tile obj={obj} key={index}/>)}
    </div>
  );
};
