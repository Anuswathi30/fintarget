import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";  
import { CandlestickController, CandlestickElement } from "chartjs-chart-financial";  
import 'chartjs-adapter-moment';  
import './ChartComponent.css';


Chart.register(...registerables, CandlestickController, CandlestickElement);

const ChartComponent = ({ data }) => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      const ctx = document.getElementById("myChart").getContext("2d");
  
      
      if (chartRef.current) {
        chartRef.current.destroy();
      }
  
    
      chartRef.current = new Chart(ctx, {
        type: 'candlestick', 
        data: {
          datasets: [{
            label: 'Candlestick Chart',
            data: data.map(candle => ({
              x: candle.t,   
              o: candle.o,   
              h: candle.h,   
              l: candle.l,   
              c: candle.c,   
            }))
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: 'time',   
              time: {
                unit: 'minute'
              }
            },
            y: {
              beginAtZero: false
            }
          }
        }
      });
  
      
      return () => {
        if (chartRef.current) {
          chartRef.current.destroy();
        }
      };
    }, [data]);
  
    return <canvas id="myChart" className="chart-container"></canvas>;
  };
  
  export default ChartComponent;