import { useEffect } from "react";
import { trackPageView, trackClick } from "./tracker";
import Card from "./Card.jsx";
import { cards } from "./Data/cards.js";
import "./App.css";


function App() {
  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <div className="app" onClick={trackClick}>
      <header className="hero">
        <h1>User Analytics Demo</h1>
        <p>Simulating real user interactions in a React app</p>
      </header>

      <main className="container">
        <div className="cards">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
            />
          ))}
        </div>
      </main>

      <footer>
        <p>React demo for user analytics tracking</p>
      </footer>
    </div>
  );
}

export default App;
