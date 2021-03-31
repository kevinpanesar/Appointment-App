import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={({target})=>props.setName(target.value)} value={props.name}>
      <option>Select Contact</option>
      {props.contacts.map((obj)=><option value={obj.name}>{obj.name}</option>)}
    </select>
  );
};
