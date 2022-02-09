import React, { useState, useEffect } from 'react'
import './App.module.scss';

function App() {

  const [time, setTime] = useState(0)
  const [start, setStart] = useState (false)

  return (
    <div className = "App">
      <h1>Stoper</h1>
    </div>
  );
} 

export default App;
