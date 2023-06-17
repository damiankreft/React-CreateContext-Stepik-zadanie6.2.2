import React from 'react';
import FaTrash from 'react-icons/fa';
import { useUsers } from './UserProvider';

export default function User({ id, name, email, firstname, lastname }) {
  const { removeUser } = useUsers();

  return (
    <section>
      <h1>{name}</h1>
      <p>
        {firstname} {lastname} <br />
        {email} <br />
        {id}
      </p>
      <button onClick={() => removeUser(id)}>
        <FaTrash />
      </button>
    </section>
  );
}
