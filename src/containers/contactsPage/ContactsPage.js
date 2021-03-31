import React, { useState, useEffect } from "react";
import { ContactForm } from '../../components/contactForm/ContactForm';
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = (props) => {

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [duplicate, setDuplicate] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      props.addContact(name, phoneNumber, email, socialMedia);
    }
    console.log(props.contacts);
    setName('');
    setPhoneNumber('');
    setEmail('');
    setSocialMedia('');
  };

  useEffect(() => {
    let isDuplicate = props.contacts.filter((obj) => { return(obj.name === name) });
    if (isDuplicate[0]) {
      setDuplicate(true);
    }
    return () => {
      setDuplicate(false);
    }
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm handleSubmit={handleSubmit} name={name} setName={setName} phone={phoneNumber} setPhone={setPhoneNumber} email={email} setEmail={setEmail} socialMedia={socialMedia} setSocialMedia={setSocialMedia} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objArray={props.contacts} />
      </section>
    </div>
  );
};
