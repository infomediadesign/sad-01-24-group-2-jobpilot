import React, { useEffect, useState, useCallback } from "react";
import '../styles/loginIndex.css';  // Import the stylesheet



const cardItems = [
  {
    id: 1,
    title: "Job Pilot",
    copy:
      "Your Entire Job Search on one Dashboard"
  },
  {
    id: 2,
    title: "Hint:",
    copy: "Please sign in with your Job Application Gmail ID"
  },
  {
    id: 3,
    title: "Feature",
    copy:
      "Search for jobs, track your applications"
  }
];

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}

function Login() {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1
  });

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1
      });
    } else {
      setIndexes(prevState => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, 4000);

    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes]);

  const loginwithgoogle = () => {
    console.log("about to open new window")
    window.open("http://localhost:4000/api/auth/google", "_self")
  }
  return (
    <div >
      <nav className="navbar">
        <p className="fontBold">Job Pilot</p>
        <div></div>
      </nav>
      <main className="container1">
        <div className="box">
          <p className="title">Welcome to Job Pilot!</p>
          <div className="background-image"></div>
            <ul className="card-carousel">
              {cardItems.map((card, index) => (
                <li
                  key={card.id}
                  className={`card ${determineClasses(indexes, index)}`}
                >
                  <h2>{card.title}</h2>
                  <p>{card.copy}</p>
                </li>
              ))}
            </ul>
            <button className="login-with-google-btn" onClick={loginwithgoogle}>sign in with google</button>
        </div>
      </main>
    </div>
  );
}

export default Login;