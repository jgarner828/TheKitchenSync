import React, { useState, useEffect } from "react";
import "../css/spiceChart.css";
import SpiceChart from "../js/SpiceChart";


const allKeys = ["ingredients"];

const colors = {
  "ingredients": "blue"
};

function SpiceChartData() {
  const [keys, setKeys] = useState(allKeys);
  const [data, setData] = useState([]);

  const getData=()=>{
    fetch('./components/data/ChartData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  // console.log(ChartData);


// const allKeys = ["🥑", "🍌", "🍆"];

// const colors = {
//   "🥑": "green",
//   "🍌": "orange",
//   "🍆": "purple"
// };

// function SpiceChartData() {
//   const [keys, setKeys] = useState(allKeys);
//   const [data, setData] = useState([
//     {
//       year: 1980,
//       "🥑": 10,
//       "🍌": 20,
//       "🍆": 30
//     },
//     {
//       year: 1990,
//       "🥑": 20,
//       "🍌": 40,
//       "🍆": 60
//     },
//     {
//       year: 2000,
//       "🥑": 30,
//       "🍌": 45,
//       "🍆": 80
//     }
//   ]);

  return (
    <React.Fragment>
      { keys && data && <SpiceChart data={data} keys={keys} colors={colors} /> }

      <div className="fields">
        {allKeys.map(key => (
          <div key={key} className="field">
            <input
              id={key}
              type="checkbox"
              checked={keys.includes(key)}
              onChange={e => {
                if (e.target.checked) {
                  setKeys(Array.from(new Set([...keys, key])));
                } else {
                  setKeys(keys.filter(_key => _key !== key));
                }
              }}
            />
            <label htmlFor={key} style={{ color: colors[key] }}>
              {key}
            </label>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default SpiceChartData;