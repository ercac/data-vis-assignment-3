import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Child1 from './Child1';
import Child2 from './Child2';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/tips.csv')
      .then(response => response.text())
      .then(csv => {
        const parsedData = Papa.parse(csv, { header: true, dynamicTyping: true }).data;
        setData(parsedData);
      });
  }, []);

  return (
    <div className="App">
      <Child1 data={data} />
      <Child2 data={data} />
    </div>
  );
}

export default App;
