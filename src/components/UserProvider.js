import { createContext, useContext, useState } from 'react';
import React from 'react';
import usersData from '../data/users-data.json';
import { v4 } from 'uuid';

const UserContext = createContext();
export const useUsers = () => useContext(UserContext);

export default function UserProvider({ children }) {
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
    <UserContext.Provider value={{ users, addUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
}
