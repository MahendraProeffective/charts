import React from "react";
import Chart from 'chart.js/auto';
import { Bubble } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export default function BubbleChart({chartData}){

    return <Bubble data={chartData} />;
}