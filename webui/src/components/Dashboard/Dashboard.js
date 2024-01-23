import React from 'react';
import { useState } from 'react';
// import '../../styles/Footer.css'; 
import MyJob from '../MyJob/MyJob.js';
import AssistantAI from '../AssistantAI/AssistantAI.js';
import AboutUs from '../AboutUs/AboutUs.js';
import Home from '../Home/Home.js';
import Header from '../Header&Footer/Header.js';
import UserPage from '../UserPage/UserPage.js';
import Footer from '../Header&Footer/Footer.js';
import '../../styles/Dashboard/Dashboard.css';

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
