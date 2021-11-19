import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './House.css';


const data = {
  labels: ['House Strak', 'House Lannister', 'House Targaryen', 'House Baratheon' , 'House Greyjoy' , 'House Bolton', 'House Tyrell', 'House Mormont'],
  datasets: [
    {
      label: '# of Votes',
      data: [10, 5, 2, 5 ,2 ,2, 2, 2],
      backgroundColor: [
        'rgba(255, 36, 12, 0.2)',
        'rgba(98, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(23, 198, 93, 0.2)',
        'rgba(255, 146, 34, 0.2)',
      ],
      borderColor: [
        'rgba(255, 36, 34, 1)',
        'rgba(98, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(23, 198, 93, 1)',
        'rgba(255, 146, 34, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => (

    <div className="charts">
        <h1>House Analysis</h1>
        <Doughnut data= {data} />
    </div>
  
); 

export default DoughnutChart;