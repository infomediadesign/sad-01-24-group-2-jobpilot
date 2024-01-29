import React from 'react';
import { useState } from 'react'; 
import MyJob from '../../src/pages/MyJob/MyJob.js';
import AssistantAI from '../pages/AssistantAI.js';
import AboutUs from '../pages/AboutUs.js';
import JobSearch from '../pages/Home/JobSearch.js';
import Header from '../pages/Header.js';
import UserPage from '../pages/UserPage.js';
import Footer from '../pages/Footer.js';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [selectedPage, setSelectedPage] = useState('Home');
    const [assistantMessages, setAssistantMessages] = useState([
      { type: 'ai', text: 'Hello! How can I assist you today?' }
    ]);
  
    const handleSelection = (page) => {
      setSelectedPage(page);
    };
  
    const renderPage = () => {
      switch (selectedPage) {
        case 'MyJob':
          return <MyJob />;
        case 'AssistantAI':
          return <AssistantAI messages={assistantMessages} setMessages={setAssistantMessages} />;
        case 'AboutUs':
          return <AboutUs />;
        case 'UserPage':
          return <UserPage />;
        default:
          return <JobSearch />;
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



