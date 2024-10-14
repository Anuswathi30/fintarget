import React from "react";
import './IntervalSelector.css'

const IntervalSelector = ({ onSelectInterval }) => {
  return (
    <select onChange={(e) => onSelectInterval(e.target.value)}>
      <option value="1m">1 Minute</option>
      <option value="3m">3 Minutes</option>
      <option value="5m">5 Minutes</option>
    </select>
  );
};

export default IntervalSelector;
