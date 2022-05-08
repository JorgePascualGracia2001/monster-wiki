import React from 'react';
import ReactDOM from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faHouse, faMagnifyingGlass, faPencil, faUser } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import App from './App';

library.add(faBook, faHouse, faMagnifyingGlass, faUser, faPencil);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);