import React from 'react';
import '../styles/styles.css';
function Quote({ quote }) {
    return (
        <div className="Quote">
            <h2>{quote.content}</h2>
            <p>- {quote.author}</p>
        </div>
    );
}

export default Quote;
