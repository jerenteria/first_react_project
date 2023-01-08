import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return <div className="chart">
        {/* map every data point to a chart bar */}
        {/* expect dataPoints prop and map every single data point into a chart bar */}
        {props.dataPoints.map(dataPoint => 
        <ChartBar
        key={dataPoint.label}
        value={dataPoint.value} 
        maxValue ={totalMaximum} 
        label={dataPoint.label}
        />)}
    </div>
};



export default Chart;