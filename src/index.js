import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import UserProvider from './components/UserProvider';

export const UsersContext = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
