import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import { StrictMode } from 'react';
import UsersProvider, { UsersContext } from './components/UsersProvider';

export const UsersContext = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </StrictMode>
);
