import React, { useState, useEffect } from 'react';
import Quote from "./components/Quote";
import quotes from "./data/data";


function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote);
  };

  return (
      <div className="App">
        <h1>Quote of the Day</h1>
        {quote && <Quote quote={quote} />}
        <button onClick={fetchQuote}>Get Random Quote</button>
      </div>
  );
}

export default App;
