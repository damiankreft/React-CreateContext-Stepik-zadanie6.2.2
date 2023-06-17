import * as React from 'react';
import './style.css';
import UsersList from './components/UsersList.js';
import AddUser from './components/AddUser.js';

export default function App() {
  return (
    <>
      <AddUser />
      <UsersList />
    </>
  );
}
