import React, { useState, useEffect, useRef } from 'react';
import "./styles.css";

const App = () =>  {
  const [quotes, setQuotes] = useState('');
  const textRef = useRef();
  let colors = ["#ffff00", "#90ee90", "#ffa500", "#ff68ff", "#a9a9e7"];

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then(data => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      })
  };

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    textRef.current.style.color = 
      colors[Math.floor(Math.random() * colors.length)];
  }, [quotes])

  return(
    <div className="App" id="quote-box">
      <div className="quote">
        <br />
          <p id="text" ref={textRef}>{quotes.text}</p>
        <br />
          <p id="author"><u>Author:</u> <i>{quotes.author}</i></p>   
        <div className="btnContainer">
          <button id="new-quote" className="btn" 
                  onClick={getQuote}
          >Next Quote
          </button>
          <a id="tweet-quote" className="btn" 
              href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
              target="_blank"
              rel="noopener noreferrer"
          >Tweet
          </a>
        </div>
        <br />
        {/*<!-- Credit Blocs -->*/}
        <a className="blocs-badge btn" href="https://www.nextlevel.trading" 
              target="_blank"
              rel="noopener noreferrer">
          <img src="https://www.nextlevel.trading/images/Favicon_X/favicon-16x16.png" 
              className="img-fluid" width="16" height="16" alt="Blocs Logo" />
            NextLevel
          </a>
      {/*<!-- Credit Blocs End -->*/}
        <h2 className="h2">Quote Machine</h2>
      </div>
      
    </div>
  );
};

export default App;
