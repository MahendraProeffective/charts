import React from "react";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

export default function MixedChart({chartData}){
    return <Bar data={chartData}/>;
}