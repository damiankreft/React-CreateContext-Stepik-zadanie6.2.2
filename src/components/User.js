import React from 'react';
import FaTrash from 'react-icons/fa';
import { useUsers } from './UserProvider';

export default function User({ id, name, email, firstname, lastname }) {
  const { users, removeUser } = useUsers();

  return (
    <div>
      <h1 style={{ display: 'inline' }}>{name}</h1>{' '}
      <button style={{ display: 'inline' }} onClick={(x) => removeUser(id)}>
        {/* <FaTrash /> */}X
      </button>
      <div style={{ clear: 'both' }} />
      {firstname} {lastname} <br />
      {email} <br />
    </div>
  );
}
