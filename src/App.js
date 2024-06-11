import React, { useState } from 'react';

const App = () => {
  // Initialize dictionary state
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  // State for current search term and result message
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');

  // Function to handle search
  const handleSearch = () => {
    // Convert search term to lowercase for case-insensitive search
    const searchTermLowerCase = searchTerm.toLowerCase();
    // Find the word in the dictionary
    const foundWord = dictionary.find(entry => entry.word.toLowerCase() === searchTermLowerCase);

    if (foundWord) {
      setSearchResult(foundWord.meaning);
    } else {
      setSearchResult('Word not found in the dictionary.');
    }
  };

  return (
    <div className="x-dictionary">
      <h1>Dictionary App</h1>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Enter a word..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="result">
        <h3>Definition:</h3>
        <p>{searchResult}</p>
      </div>
    </div>
  );
};

export default App;