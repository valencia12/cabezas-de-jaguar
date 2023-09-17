import React from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import App from '../AppComponent';
import ArchivoRojo from '../pages/ArchivoRojo';
import ArchivoRojoDetail from '../pages/ArchivoRojoDetail';

export default function RouterCa() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/archivo/:id" element={<ArchivoRojoDetail />} />
      <Route path="/archivo" element={<ArchivoRojo />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}
