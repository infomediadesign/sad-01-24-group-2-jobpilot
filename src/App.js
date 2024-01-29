import React, { useState } from 'react';
import './App.css';
import Login from '../src/pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../src/pages/Dashboard';


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
