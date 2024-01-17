
import './App.css';
import {UserData} from './Data';
import BarChart from './Components/BarChart';
import { useState } from 'react';
import PieChart from './Components/PieChart';
import LineChart from './Components/LineChart';
import DougNut from './Components/DoughNut';
import PolarAreaChart from './Components/PolarAreaChart';
import BubbleChart from './Components/BubbleChart';
import RadarChart from './Components/RadarChart';
import ScatterChart from './Components/ScatterChart';
import MixedChart from './Components/MixedChart';
import { Bubble } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function App() {
  const [userData]=useState({
    labels: UserData.map(d => d.year),
    datasets:[
      {
        label:"Users Gained",
        data:UserData.map(data => data.userGain),
        // backgroundColor: [
        //   "rgba(75,192,192,1)",
        //   "#ecf0f1",
        //   "#50AF95",
        //   "#f3ba2f",
        //   "#2a71d0",
        // ],
        // borderColor: "black",
        // borderWidth: 2,
      }
    ]
  });
  const Bubbledata = {
    datasets: [
      {
        label: 'Red dataset',
        data: Array.from({ length: 15 }, () => ({
          x: faker.number.int({ min: -100, max: 100 }),
          y: faker.number.int({ min: -100, max: 100 }),
          r: faker.number.int({ min: 5, max: 10 }),
        })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Blue dataset',
        data: Array.from({ length: 15}, () => ({
          x: faker.number.int({ min: -100, max: 100 }),
          y: faker.number.int({ min: -100, max: 100 }),
          r: faker.number.int({ min: 5, max: 20 }),
        })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const [userData1]=useState({
    labels: UserData.map(d => d.year),
    datasets:[
      {
        type:"line",
        label:"Users Gained",
        data:UserData.map(data => data.userGain),
      },
      {
        type:"bar",
        label:"Users Lost",
        data:UserData.map(data => data.userLost),
      }
    ]
  })
  return (
    <div className="App">
      <h1>Welcome!!!</h1>
      {/* <BarChart chartData={userData}/> */}
      <div style={{ width: 'auto',height:'auto',float:'left',border:'200',borderColor:'black' }}>
        <h2>BarChart</h2>
        <BarChart chartData={userData}/>
      </div>
      <div style={{ width: 'auto',height:'auto' ,float:'left'}}>
      <h2>PieChart</h2>
      <PieChart chartData={userData}/>
      </div>
      <div style={{ width: 'auto',height:'auto',float:'left' }}>
      <h2>LineChart</h2>
      <LineChart chartData={userData}/>
      </div>
      <div style={{ width: 'auto',height:'auto',float:'left' }}>
      <h2>DougNut</h2>
      <DougNut chartData={userData}/>
      </div>
      <div style={{ width: 'auto',height:'auto',float:'left' }}>
      <h2>PolarAreaChart</h2>
      <PolarAreaChart chartData={userData}/>
      </div>
      <div style={{ width: 'auto',height:'auto',float:'left' }}>
      <h2>BubbleChart</h2>
      <BubbleChart chartData={Bubbledata}/>
      </div>
      <div style={{ width: 'auto',height:'auto',float:'left' }}>
      <h2>RadarChart</h2>
      <RadarChart chartData={userData}/>
      </div>
      <div style={{ width: 'auto',height:'auto',float:'left' }}>
      <h2>ScatterChart</h2>
      <ScatterChart chartData={userData}/>
      </div>
      <div style={{ width: 'auto',height:'auto',float:'left' }}>
      <h2>MixedChart</h2>
      <MixedChart chartData={userData1}/>
      </div>
    </div>
  );
}
