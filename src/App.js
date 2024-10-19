import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import tipsData from './tips.csv';
import "./App.css"

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    d3.csv(tipsData).then((data) => {
      data.forEach(d => {
        d.total_bill = +d.total_bill;
        d.tip = +d.tip;
      });
      setData(data);
    });
  }, []);

  

  return (
    <div>
      <Child1 data={data} />
      <Child2 data={data} />
    </div>
  );
};

export default App;
