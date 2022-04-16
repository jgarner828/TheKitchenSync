import React, { useState, useEffect } from "react";
import "../css/spiceChart.css";
import SpiceChart from "../js/SpiceChart";


const allKeys = ["oregano", "thyme", "paprika"];

const colors = {
  "oregano": "rgb(15, 93, 196)",
  "thyme": "lightgrey",
  "paprika": "rgb(150, 9, 9)"
};

function SpiceChartData() {
  const [keys, setKeys] = useState(allKeys);
  const [data, setData] = useState([
    {
      date: "04-15-22",
      "oregano": 1,
      "thyme": 3,
      "paprika": 2
    },
    {
      date: "04-16-22",
      "oregano": 4,
      "thyme": 2,
      "paprika": 1
    },
    {
      date: "04-17-22",
      "oregano": 3,
      "thyme": 1,
      "paprika": 2
    }
  ]);

  // const getData=()=>{
  //   fetch('../components/data/ChartData.json'
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       setData(myJson)
  //     });
  // }
  // useEffect(()=>{
  //   getData()
  // },[])
  // console.log(ChartData);

  return (
    <React.Fragment>
      {/* <div>
      { 
        keys && data && data.length>0 && data.map((item) => <p>{item.about} </p>
      }
      </div> */}

      <SpiceChart data={data} keys={keys} colors={colors} /> 

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