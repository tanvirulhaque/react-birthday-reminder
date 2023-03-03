import React, { useState } from 'react';
import data from './data';
import List from './List';
import './App.css';

function App() {
  const [people, setPeople] = useState(data);
  const clearAll = () => setPeople([]);

  return (
    <main>
      <div className='container'>
        <h2>Today's Birthday Reminder!</h2>
        <List people={people}/>
        <button onClick={clearAll} className='clear-all'>{people.length < 1 ? 'All Cleared' : 'Clear All'}</button>
      </div>
    </main>
  );
}

export default App;