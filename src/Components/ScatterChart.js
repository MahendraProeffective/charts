import React from "react";
import Chart from 'chart.js/auto';
import {  Scatter } from "react-chartjs-2";

export default function ScatterChart({chartData}){
    return <Scatter data={chartData}/>;
}