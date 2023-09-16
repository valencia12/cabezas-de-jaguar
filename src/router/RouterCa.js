import React from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import App from '../App';
import ArchivoRojo from '../pages/ArchivoRojo';

export default function RouterCa() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Archivo" element={<ArchivoRojo />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}
