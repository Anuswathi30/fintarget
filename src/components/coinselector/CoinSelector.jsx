import React from "react";
import './CoinSelector.css'

const CoinSelector = ({ onSelectCoin }) => {
  return (
    <select onChange={(e) => onSelectCoin(e.target.value)}>
      <option value="ethusdt">ETH/USDT</option>
      <option value="bnbusdt">BNB/USDT</option>
      <option value="dotusdt">DOT/USDT</option>
    </select>
  );
};

export default CoinSelector;
