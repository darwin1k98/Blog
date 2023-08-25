import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Route1 from './assets/Route1';
import CardDetail from './assets/CardDetail';

function App() {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path="" element={<CardDetail />} />
        <Route path="/route1" element={<Route1 />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;