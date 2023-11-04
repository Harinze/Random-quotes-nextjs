// components/QuoteBox.js
import { useState, useEffect } from "react";

const QuoteBox = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote({ text: data.content, author: data.author });
    } catch (error) {
      console.error("Error fetching random quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  };

  return (
    <div
      id="quote-box"
      className="text-center p-4 border rounded-lg mx-auto"
      style={{ maxWidth: "600px" }}
    >
      <p id="text" className="text-xl">
        {quote.text}
      </p>
      <p id="author" className="text-lg">
        - {quote.author}
      </p>
      <div className="mt-4">
        <button
          id="new-quote"
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleNewQuote}
        >
          New Quote
        </button>
        <a
          id="tweet-quote"
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
          href={`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet Quote
        </a>
      </div>
    </div>
  );
};

export default QuoteBox;
