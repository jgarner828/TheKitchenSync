import '../css/spiceChart.css';
import * as d3 from 'd3';
import {useEffect} from 'react';

function SpiceChart() {
  
  useEffect(() => {

      // Create a dataset of pets and the amount of people that own them
      // replace data with data from query!!!! 
      let dataSet = [
        {subject: "Dogs", count: 150},
        {subject: "Fish", count: 75},
        {subject: "Cats", count: 135},
        {subject: "Bunnies", count: 240},
      ]

      // Generate a p tag for each element in the dataSet with the text: Subject: Count 
      d3.select('#pgraphs').selectAll('p').data(dataSet).enter().append('p').text(dt => dt.subject + ": " + dt.count)
      
      // Bar Chart:
        const getMax = () => { // Calculate the maximum value in the DataSet
          let max = 0
          dataSet.forEach((dt) => {
              if(dt.count > max) {max = dt.count}
          })
          return max
        }
     
        
        // Create each of the bars and then set them all to have the same height(Which is the max value)
        d3.select('#BarChart').selectAll('div').data(dataSet) 
        .enter().append('div').classed('bar', true).style('height', `${getMax()}px`)
    
        //Transition the bars into having a height based on their corresponding count value
        d3.select('#BarChart').selectAll('.bar')
        .transition().duration(1000).style('height', bar => `${bar.count}px`)
          .style('width', '80px').style('margin-right', '10px').delay(300) // Fix their width and margin
        
        
        
    }, [])

  return (
    <div className = "App">
      {/* // Create a div to house our p tags */}
      <div id="pgraphs"></div> 
      {/* // Create a div to house our BarChart */}
      <div id="BarChart"></div> 
    </div>
  );
}

export default SpiceChart;