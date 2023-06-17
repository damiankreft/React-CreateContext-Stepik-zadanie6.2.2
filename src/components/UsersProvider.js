import React, { createContext, useContext, useState } from 'react';
import usersData from '../data/users-data.json';
import { v4 } from 'uuid';

const UsersContext = createContext();
export const useUsers = () => useContext(UsersContext);

export default function UsersProvider({ children }) {
  const [users, setUsers] = useState(usersData);

  const addUser = (name, firstname, lastname, email) => {
    const newUsers = [
      ...users,
      {
        id: v4(),
        name: name,
        email: email,
        firstname: firstname,
        lastname: lastname,
      },
    ];
    setUsers(newUsers);
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <UsersProvider.Provider value={{ users, addUser, removeUser }}>
      {children}
    </UsersProvider.Provider>
  );
}
