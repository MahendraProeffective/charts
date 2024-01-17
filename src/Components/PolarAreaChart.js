import React from "react";
import Chart from 'chart.js/auto';
import { PolarArea } from "react-chartjs-2";

export default function PolarAreaChart({chartData}){
    return <PolarArea data={chartData}/>;
}