
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
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import Chart from "react-apexcharts";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

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
  const [apexChartData] = useState({
    options: {
      chart: {
        id: "bar",
        toolbar:{show:true},
        zoom: {
          enabled: true
        }
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,1999,2000,2001,2002,2003,2004,2005]
      }
    },
    series: [
      {
        name: "series-1",
        data: Array.from({ length: 15}, () => (faker.number.int({ min: 0, max: 100 })))
      },
      {
        name: "series-2",
        data: Array.from({ length: 15}, () => (faker.number.int({ min: 0, max: 100 })))
      },
      {
        name: "series-3",
        data: Array.from({ length: 15}, () => (faker.number.int({ min: 0, max: 100 })))
      },{
        name: "series-4",
        data: Array.from({ length: 15}, () => (faker.number.int({ min: 0, max: 100 })))
      },
      {
        name: "series-5",
        data: Array.from({ length: 15}, () => (faker.number.int({ min: 0, max: 100 })))
      },
      {
        name: "series-6",
        data: Array.from({ length: 15}, () => (faker.number.int({ min: 0, max: 100 })))
      },{
        name: "series-7",
        data: Array.from({ length: 15}, () => (faker.number.int({ min: 0, max: 100 })))
      },
      {
        name: "series-8",
        data: Array.from({ length: 15}, () => (faker.number.int({ min: 0, max: 100 })))
      },
      {
        name: "series-9",
        data: Array.from({ length: 15}, () => (faker.number.int({ min: 0, max: 100 })))
      }
    ]
  });
  const [stackedColumn] = useState({
    series: [{
    name: 'PRODUCT A',
    data: Array.from({ length: 15}, () => (faker.number.int({ min: 0, max: 100 })))
  }, {
    name: 'PRODUCT B',
    data: Array.from({ length: 15}, () => (faker.number.int({ min: 0, max: 100 })))
  }, {
    name: 'PRODUCT C',
    data: Array.from({ length: 15}, () => (faker.number.int({ min: 0, max: 100 })))
  }, {
    name: 'PRODUCT D',
    data: Array.from({ length: 15}, () => (faker.number.int({ min: 0, max: 100 })))
  }],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'left',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    },
  },
  xaxis: {
    type: 'datetime',
    categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
      '01/05/2011 GMT', '01/06/2011 GMT'
    ],
  },
  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 1
  }
  });
  const [userData2]=useState({
    labels: UserData.map(d => d.year),
    datasets:[
      {
        fill:'1',
        type:"line",
        label:"Users Gained",
        data:UserData.map(data => data.userGain),
      },
      {
        fill:'1',
        type:"line",
        label:"Users Lost",
        data:UserData.map(data => data.userLost),
      }
    ]
  })
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ]);


  return (
    <div className="App">
      <h1>Welcome!!!</h1>
      {/* <BarChart chartData={userData}/> */}
      <div style={{ width: 'auto',height:'auto',float:'left',border:'200',borderColor:'black' }}>
        <h2>BarChart</h2>
        <BarChart chartData={userData}/>
      </div>
      <div style={{ width: 'auto',height:'auto',float:'left' }}>
      <h2>BubbleChart</h2>
      <BubbleChart chartData={Bubbledata}/>
      </div>

      <div style={{ width: 'auto',height:'auto',float:'left' }}>
      <h2>ScatterChart</h2>
      <ScatterChart chartData={userData}/>
      </div>
      <div style={{ width: 'auto',height:'auto',float:'left' }}>
      <h2>MixedChart</h2>
      <MixedChart chartData={userData1}/>
      </div>
      <div style={{ width: 'auto',height:'auto',float:'left' }}>
      <h2>AreaChart</h2>
      <Line data={userData2}/>
      </div>
      <div style={{ width: '500',height:'5000',float:'left' }}>
      <h2>LineChart</h2>
      <LineChart chartData={userData} />
      </div>
      <div style={{ width: 'auto',height:'auto',float:'left' }}>
      <h2>HeatMap</h2>
      <Chart options={apexChartData.options}
              series={apexChartData.series}
              type="heatmap"
              width="600"/>
      </div>
      <div style={{ width: 'auto',height:'auto',float:'left' }}>
      <h2>StackedColumns</h2>
      <Chart options={stackedColumn}
              series={stackedColumn.series}
              type="bar"
              width="500"/>
      </div>
      <div style={{ width: 'auto',height:'auto',float:'left' }}>
      <h2>RadarChart</h2>
      <RadarChart chartData={userData}/>
      </div>
      <div style={{ width: 'auto',height:'auto' ,float:'left'}}>
      <h2>PieChart</h2>
      <PieChart chartData={userData}/>
      </div>

      <div style={{ width: 'auto',height:'auto',float:'left' }}>
      <h2>DougNut</h2>
      <DougNut chartData={userData}/>
      </div>
      <div style={{ width: 'auto',height:'auto',float:'left' }}>
      <h2>PolarAreaChart</h2>
      <PolarAreaChart chartData={userData}/>
      </div>
    </div>
//     <div className='App'>
//       <div className="ag-theme-quartz" style={{ width: '100%', height: '100%' }}>
//         <h2>The AG Grid component</h2>
//   <AgGridReact rowData={rowData} columnDefs={colDefs} />
// </div>
//     </div>
  );
}
