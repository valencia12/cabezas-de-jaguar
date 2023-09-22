import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppComponent from '../AppComponent';
import ArchivoRojo from '../pages/ArchivoRojo';
import ArchivoRojoDetail from '../pages/ArchivoRojoDetail';

export default function RouterCa() {
  return (
    <Routes>
      <Route path="/" element={<AppComponent />} />
      <Route path="/archivo/:referenceCode" element={<ArchivoRojoDetail />} />
      <Route path="/archivo" element={<ArchivoRojo />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}
