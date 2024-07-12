import React, { useState } from "react";

const Dictionary = () => {
    const initialDictionary = [
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
      ];
    
      const [dictionary] = useState(initialDictionary);
      const [searchTerm, setSearchTerm] = useState('');
      const [result, setResult] = useState(null);
    
      const handleSearch = (event) => {
        event.preventDefault();
        const entry = dictionary.find(item => item.word.toLowerCase() === searchTerm.toLowerCase());
        if (entry) {
          setResult(entry.meaning);
        } else {
          setResult('Word not found in the dictionary.');
        }
      };
    
      return (
        <div >
          <form onSubmit={handleSearch} >
            <input 
              type="text" 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} 
              placeholder="Enter a word..." 
            />
            <button type="submit" >Search</button>
          </form>
          <h3>Defination: </h3>
          <div>
            {result && <p>{result}</p>}
          </div>
        </div>
      );
}

export default Dictionary;