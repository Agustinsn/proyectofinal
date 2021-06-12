import React, { useState } from 'react';

const ContactForm = () => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      userName,
      age,
      email
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Edad</label>
          <input
            type="number"
            name="age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
          />
        </div>

        <button type="submit">submit</button>
      </form>
      <div className="text-center">
        <p>{userName}</p>
        <p>{age}</p>
        <p>{email}</p>
      </div>
    </>
  );
};

export default ContactForm;