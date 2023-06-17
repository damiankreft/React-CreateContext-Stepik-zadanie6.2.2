import React from 'react';
import User from './User';
import { useUsers } from './UserProvider.js';

export default function UsersList() {
  const { users } = useUsers();

  if (!users.length) {
    return <div>No users listed.</div>;
  }

  return (
    <div>
      {users.map((user) => {
        <User key={user.id} {...user} />;
      })}
    </div>
  );
}
