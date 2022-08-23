import React, { useState } from 'react';
// sell_params: {
//   sell_fast_key: 'high',
//   sell_horizontal_push: 10,
//   sell_slow_key: 'low',
//   sell_vertical_push: 1.184,
// }

const SellParams = () => {
  const sellFastOptions = ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'];
  const [sellFastvalue, sellFastsetValue] = useState('high');
  const handleChangesellFast = event => {
    sellFastsetValue(event.target.sellFastvalue);
  };

  const sellSlowOptions = ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'];
  const [sellSlowvalue, sellSlowsetValue] = useState('low');
  const handleChangeSlow = event => {
    sellSlowsetValue(event.target.sellSlowvalue);
  };

  // const Sell_horizontal_push = [0, 10];
  const [valueSellHorizontal, setSellHorizontalValue] = useState('10');
  const handleChangeSellHorizontal = event => {
    setSellHorizontalValue(event.target.valueSellHorizontal);
  };

  // const Sell_vertical_push = [0.5, 1.5];
  const [valueSellVertical, setSellVerticalValue] = useState('1.184');
  const handleChangeSellVertical = event => {
    setSellVerticalValue(event.target.valueSellVertical);
  };

  return (
    <div className="page__content">
      <h3>SellParams</h3>

      <label>
        Sell fast key
        <select value={sellFastvalue} onChange={handleChangesellFast}>
          {sellFastOptions.map(option => (
            <option setValue={option}>{option}</option>
          ))}
        </select>
      </label>

      <div>
        <label>
          Sell Horizontal Push
          <input
            type="number"
            placeholder="default is 10"
            value={valueSellHorizontal}
            onChange={handleChangeSellHorizontal}
          />
         
          
        </label>
      </div>

      <label>
        Sell slow key
        <select value={sellSlowvalue} onChange={handleChangeSlow}>
          {sellSlowOptions.map(option => (
            <option setValue={option}>{option}</option>
          ))}
        </select>
      </label>

      <div>
        <label>
          Sell Vertical Push
          <input
            type="number"
            placeholder="default is 1,184"
            value={valueSellVertical}
            step={0.001}
            onChange={handleChangeSellVertical}
          />
        </label>
      </div>
    </div>
  );
};

export default SellParams;
