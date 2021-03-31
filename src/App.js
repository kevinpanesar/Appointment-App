import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  const addContact = (name, phoneNumber, email, socialMedia) => {
    setContacts((prev) => {
      return [
        ...prev,
        {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        socialMedia: socialMedia
      }]
    }
    );
  }

  const addAppointment = (title, name, location, time, date) => {
    setAppointments((prev) => {
      return [
        ...prev,
        {
        title: title,
        name: name,
        location: 'Location: ' + location,
        time: 'Time: ' + time,
        date: date
      }]
    }
    );
  }


  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };


  return (
    <>
      <h1>Appointments</h1>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage addAppointment={addAppointment} contacts={contacts} appointments={appointments} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
