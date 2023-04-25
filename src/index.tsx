import React from 'react';
import ReactDOM from 'react-dom/client';  // aqui importa los archivos que trae
import {Mifunct} from './App';          //{} entre corchetes el nombre del componente,  y from va la ruta del acceso
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Mifunct />       // aqui ponemos el objeto exportadpo
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
