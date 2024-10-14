import React, { useEffect, useState } from "react";
import ChartComponent from "../chartcomponent/ChartComponent";
   import './WebSocketmanager.css';

const WebSocketmanager = ({ symbol, interval }) => {
  const [chartData, setChartData] = useState([]);  

  useEffect(() => {
    let ws;

    const createWebSocket = () => {
      ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@kline_${interval}`);

      
      ws.onopen = () => {
        console.log('Connected to WebSocket for', symbol, 'at interval', interval);
      };

      
      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.k && message.k.x) {  
          const newCandle = {
            t: message.k.t,  
            o: message.k.o,  
            h: message.k.h,  
            l: message.k.l,  
            c: message.k.c   
          };
          
          setChartData(prevData => [...prevData, newCandle]);
        }
      };

      
      ws.onclose = () => {
        console.log("WebSocket closed for", symbol);
      };

      
      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    };

    
    createWebSocket();

    
    return () => {
      if (ws) ws.close();
    };
  }, [symbol, interval]);  

  return (
    <div>
      <h3>Live Data for {symbol.toUpperCase()}</h3>
      {}
      <ChartComponent data={chartData} />
    </div>
  );
};

export default WebSocketmanager;
