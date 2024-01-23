import React from 'react';
import { useState } from 'react';
import '../../styles/Footer.css'; 
import MyJob from './MyJob.js';
import AssistantAI from './AssistantAI.js';
import AboutUs from './AboutUs.js';
import Home from './Home.js';
import Header from './Header.js';
import UserPage from './UserPage.js';
import Footer from './Footer.js';
import '../../styles/Dashboard.css';

const Dashboard = () => {
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

export default Dashboard;
