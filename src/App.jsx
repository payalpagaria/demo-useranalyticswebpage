import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { trackPageView, trackClick } from "./tracker";
import Card from "./Card";
import { cards } from "./Data/cards";
import Explore from "./pages/Explore";
import Engage from "./pages/Engage";
import Analyze from "./pages/Analyze";

import "./App.css";

function App() {
  const location = useLocation();

  // Track page view on route change
  useEffect(() => {
    trackPageView();
  }, [location.pathname]);

  return (
    <div className="app" onClick={trackClick}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header className="hero">
                <h1>User Analytics Demo</h1>
                <p>Simulating real user interactions in a React app</p>
              </header>

              <main className="container">
                <div className="cards">
                  {cards.map((card, index) => (
                    <Card key={index} {...card} />
                  ))}
                </div>
              </main>
            </>
          }
        />

        <Route path="/explore" element={<Explore />} />
        <Route path="/engage" element={<Engage />} />
        <Route path="/analyze" element={<Analyze />} />
      </Routes>

      <footer>
        <p>React demo for user analytics tracking</p>
      </footer>
    </div>
  );
}

export default App;
