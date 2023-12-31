import React, { useState } from 'react';
import './App.css';
import logo from './wordwrapaydatverge.png'; // Import the logo

function App() {
  const [inputText, setInputText] = useState(''); // State to hold the input text
  const [transformedText, setTransformedText] = useState(''); // State to hold the transformed text
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state
  const [error, setError] = useState(''); // State to hold any error message

  const handleInputChange = (event) => {
    setInputText(event.target.value); // Update state with input value
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit action
    setIsLoading(true); // Set loading state to true
    setError(''); // Reset any previous error message

    // Simulate a text transformation API call with a timeout
    setTimeout(() => {
      try {
        // Simulate API call success with a simple text transformation
        const transformed = inputText.toUpperCase(); // Placeholder transformation logic
        setTransformedText(transformed); // Set the transformed text
      } catch (error) {
        setError('Failed to transform text. Please try again.'); // Set error message on failure
      }
      setIsLoading(false); // Set loading state to false once done
    }, 1000); // Simulate API call delay
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="WordWrap Logo" className="App-logo" />
        <form onSubmit={handleSubmit}>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter your text here"
            className="text-input"
            disabled={isLoading}
          />
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? 'Transforming...' : 'Submit'}
          </button>
        </form>
        {transformedText && <div className="transformed-text">{transformedText}</div>}
        {error && <div className="error-message">{error}</div>}
      </header>
    </div>
  );
}

export default App;
