import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  name,
  setName,
  date,
  setDate,
  time,
  setTime,
  location,
  setLocation,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={({ target }) => setTitle(target.value)} value={title} placeholder="Title"></input>
      <input onChange={({ target }) => setLocation(target.value)} value={location} placeholder="Location"></input>
      <input onChange={({ target }) => setDate(target.value)} value={date} placeholder="Date" type="date"></input>
      <input onChange={({ target }) => setTime(target.value)} value={time} placeholder="Time" min={getTodayString()} type="time"></input>
      <ContactPicker contacts={contacts} name={name} setName={setName} />
      <input type="submit"></input>
    </form>
  );
};
