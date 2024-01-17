import React from "react";
import Chart from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";

export default function DougNut({chartData}){
    return <Doughnut data={chartData}/>;
}