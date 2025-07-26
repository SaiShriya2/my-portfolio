import React, { useRef, useState, useEffect } from "react";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [fadeLanding, setFadeLanding] = useState(false);
  const portfolioRef = useRef(null);

  const handleViewProfile = () => {
    setFadeLanding(true); // Start fade-out
    setTimeout(() => {
      setShowLanding(false); // Hide Landing after fade transition
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }, 700); // Duration matches your Landing's fade CSS
  };

  useEffect(() => {
    if (showLanding) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showLanding]);

  return (
    <>
      {showLanding && (
        <Landing fadeOut={fadeLanding} onViewProfile={handleViewProfile} />
      )}
      {!showLanding && (
        <>
          <Header />
          <div ref={portfolioRef}>
            <Portfolio />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default App;
