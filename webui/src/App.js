import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyJob from './components/Home/MyJob.js';
import AssistantAI from './components/Home/AssistantAI.js';
import AboutUs from './components/Home/AboutUs.js';
import Home from './components/Home/Home.js';
import Header from './components/Home//Header.js';
import UserPage from './components/Home/UserPage.js';
import Footer from './components/Home/Footer.js';
import Login from './components/Login/index.js';
import Register from './components/Register/index.js';

const App = () => {
  const [selectedPage, setSelectedPage] = useState('Home');

  const handleSelection = (page) => {
    setSelectedPage(page);
  };

  const renderPage = () => {
    switch (selectedPage) {
      case 'MyJob':
        return <MyJob />;
      case 'AssistantAI':
        return <AssistantAI />;
      case 'AboutUs':
        return <AboutUs />;
      case 'UserPage':
        return <UserPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      {/* <Header onSelection={handleSelection} currentPage={selectedPage} />
      <div className="page-content">
        {renderPage()}
      </div>
      <Footer /> */}
       <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
