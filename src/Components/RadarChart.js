import React from "react";
import Chart from 'chart.js/auto';
import {Radar } from "react-chartjs-2";

export default function RadarChart({chartData}){
    return <Radar data={chartData}/>;
}