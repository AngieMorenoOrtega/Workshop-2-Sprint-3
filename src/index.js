import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from '../src/AppRoutes/AppRoutes';
import DetalleDePizza from './components/DetalleDePizza/DetalleDePizza';
import Layout from './components/Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Layout></Layout>
  </React.StrictMode>
);


