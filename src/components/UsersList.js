import React from 'react';
import User from './User';
import { useUsers } from './UserProvider.js';

export default function UsersList() {
  const { users } = useUsers();

  console.log(users);
  users.map((x) => {
    // console.log(x);
  });
  if (!users.length) {
    return <div>No users listed.</div>;
  }

  return (
    <div>
      test
      {users.map((u) => {
        console.log(u);
        <User key={u.id} {...u} />;
      })}
    </div>
  );
}
