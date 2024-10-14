import React, { useState } from "react";
import CoinSelector from "../src/components/coinselector/CoinSelector";
import IntervalSelector from "../src/components/intervalselector/IntervalSelector";
import WebSocketmanager from "../src/components/websocketmanager/WebSocketmanager";
import './App.css';

const App = () => {
  const [selectedCoin, setSelectedCoin] = useState("ethusdt");
  const [selectedInterval, setSelectedInterval] = useState("1m");

  return (
    <div className="App">
      <h1>Binance Market Data</h1>
      <div className="selectors">
        <CoinSelector onSelectCoin={setSelectedCoin} />
        <IntervalSelector onSelectInterval={setSelectedInterval} />
      </div>
      <WebSocketmanager symbol={selectedCoin} interval={selectedInterval} />
    </div>
  );
};

export default App;
