import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Adm from './pages/adm';
import Consulta from './pages/consulta';
import Cadastro from './pages/cadastro';
import { AuthProvider } from "./contexts/auth";
import RoutesApp from "./routes"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthProvider>
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>
</AuthProvider>
);