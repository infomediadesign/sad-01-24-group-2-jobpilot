import React, { useState } from 'react';
import './App.css';
import MyJob from './components/MyJob.js';
import AssistantAI from './components/AssistantAI.js';
import AboutUs from './components/AboutUs.js';
import Home from './components/Home.js';
import Header from './components/Header.js';
import UserPage from './components/UserPage.js';
import Footer from './components/Footer.js';

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
      <Header onSelection={handleSelection} currentPage={selectedPage} />
      <div className="page-content">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
};

export default App;
