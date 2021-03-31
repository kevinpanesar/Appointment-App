import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  socialMedia,
  setSocialMedia
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={({ target }) => setName(target.value)} value={name} placeholder="Name"></input>
      <input onChange={({ target }) => setPhone(target.value)} value={phone} placeholder="Phone Number"></input>
      <input onChange={({ target }) => setEmail(target.value)} value={email} placeholder="Email Address"></input>
      <input onChange={({ target }) => setSocialMedia(target.value)} value={socialMedia} placeholder="Instagram Handle"></input>
      <input type='submit'></input>
    </form>
  );
};
