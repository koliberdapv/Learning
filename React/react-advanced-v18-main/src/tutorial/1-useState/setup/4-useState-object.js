import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });

  const [name, setName] = React.useState('peter');
  const [age, setAge] = React.useState(24);
  const [message, setMessage] = React.useState('random message');

  const changeMessage = () => {
    // setPerson({ ...person, message: 'get fucked' });
    setMessage('hello world');
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      {/* <h3>{person.message}</h3> */}
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
