import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import UsersProvider, { UsersContext } from './components/UsersProvider';
import usersData from '../data/users-data.json';

export const UsersContext = createContext(usersData);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </React.StrictMode>
);
