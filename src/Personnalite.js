import React, { Component } from "react";
import {Radar} from 'react-chartjs-2';
const Personnalite = (props) => {
  {
    return (
      <>
        <div id="persoGraph">
        <Radar height={200} width={200} data={{labels: [

   'Sociabilité',
    'Adaptabilité',
    'Curiosité',
    'Communication'
    ,
   
  ],
  datasets: [{
    label: 'Personnalite kriss CLOTILDE',
    data: [70, 60, 90,50],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)',
    pointHitRadius:0
  }]}}></Radar>
        </div>
      </>
    );
  }
};
export default Personnalite;
