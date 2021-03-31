import React, { useState, useEffect } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = (props) => {

  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    props.addAppointment(title, name, location, time, date);
    setTitle('');
    setName('');
    setLocation('');
    setTime('');
    setDate('');
  };

  useEffect(() => {
    console.log(time.getHours);
  });

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm handleSubmit={handleSubmit} title={title} setTitle={setTitle} name={name} setName={setName} date={date} setDate={setDate} time={time} setTime={setTime} location={location} setLocation={setLocation} contacts={props.contacts} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList objArray={props.appointments} />
      </section>
    </div>
  );
};
