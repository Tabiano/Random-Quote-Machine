import { useState } from "react";
import { FaQuoteLeft, FaTwitter } from "react-icons/fa";
import "./App.css";
import quotes from "./assets/quotes.json";
import Footer from "./components/Footer";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRadomColor = () => {
  const red = Math.floor(Math.random() * 150);
  const green = Math.floor(Math.random() * 150);
  const blue = Math.floor(Math.random() * 150);

  return `rgb(${red}, ${green}, ${blue})`;
};

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRadomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRadomColor());
  };

  return (
    <div
      className="background"
      style={{ backgroundColor: randomColor, transition }}
    >
      <div id="quote-box">
        <div
          className="quote-content"
          style={{ color: randomColor, transition }}
        >
          <h2 id="text">
            <FaQuoteLeft size="25" style={{ marginRight: "10px" }} />
            {quote.quote}
          </h2>
        </div>
        <h4 id="author" style={{ color: randomColor, transition }}>
          - {quote.author}
        </h4>
        <div className="buttons">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            id="tweet-quote"
            style={{
              backgroundColor: randomColor,
              marginRight: "10px",
              transition,
            }}
          >
            <FaTwitter color="white" />
          </a>
          <button
            id="new-quote"
            onClick={() => {
              setTimeout(changeQuote, 300);
            }}
            style={{ backgroundColor: randomColor, transition }}
          >
            New Quote
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
