import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
      <div className="App">
        <h1>Quote of the Day</h1>
        <p>{quote}</p>
      </div>
  );
}

export default App;
