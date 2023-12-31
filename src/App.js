import React, { useState } from 'react';
import './App.css';
import logo from './wordwrapbyaydatverge.png'; // Import the logo

function App() {
  const [text, setText] = useState(""); // State to hold the input text

  const handleInputChange = (event) => {
    setText(event.target.value); // Update state with input value
  };

  const handleSubmit = () => {
    alert(`Submitted Text: ${text}`); // Placeholder for submission action
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="WordWrap Logo" className="App-logo" /> {/* Use the logo here */}
        <textarea
          value={text}
          onChange={handleInputChange}
          placeholder="Enter your text here"
          className="text-input"
        />
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </header>
    </div>
  );
}

export default App;
