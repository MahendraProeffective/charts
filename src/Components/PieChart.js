import React from "react";
import Chart from 'chart.js/auto';
import { Pie } from "react-chartjs-2";

export default function PieChart({chartData}){
    return <Pie data={chartData}/>;
}