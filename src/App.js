import React, { useState } from 'react';
import './App.css';
import Login from './pages/Login.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard.js';


const App = () => {

  return (
       <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;