import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import UsersProvider from './components/UsersProvider';

export const UsersContext = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </React.StrictMode>
);
