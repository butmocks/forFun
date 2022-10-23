
import React, { useState } from 'react';

  // buy_params: {
  //   buy_fast_key: 'high', 
  //   buy_horizontal_push: 7,
  //   buy_slow_key: 'volume',
  //   buy_vertical_push: 0.942,
  // },


const BuyParams = () => {
  const buyFastOptions = ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'];
  const [value1, setValue1] = useState('high');

  const buySlowOptions = ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'];
  const [value, setValue] = useState('low');

  // const buy_horizontal_push = [0, 10];
  const [valueBuyHorizontal, setBuyHorizontalValue] = useState('7');

  // const buy_vertical_push = [0.5, 1.5];
  const [valueBuyVertical, setBuyVerticalValue] = useState('0.942');

  const handleChange1 = event => {
    setValue1(event.target.value);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };
  в
  const handleChangeBuyHorizontal = event => {
    setBuyHorizontalValue(event.target.value);
  };

  const handleChangeBuyVertical = event => {
    setBuyVerticalValue(event.target.value);
  };

  return (
    <div className="page__content">
      <h3>Buy Params</h3>

      <label>
        Buy fast key
        <select value={value1} onChange={handleChange1}>
          {buyFastOptions.map(option => (
            <option setValue1={option}>{option}</option>
          ))}
        </select>
      </label>

      <div>
        <label>
          Buy Horizontal Push
          <input
            type="number"
            placeholder="default is 7"
            value={valueBuyHorizontal}
            onChange={handleChangeBuyHorizontal}
          />
        </label>
      </div>

      <label>
        Buy slow key
        <select value={value} onChange={handleChange}>
          {buySlowOptions.map(option => (
            <option setValue={option}>{option}</option>
          ))}
        </select>
      </label>
      <div>
        <label>
          Buy Vertical Push
          <input
            type="number"
            placeholder="default is 7"
            value={valueBuyVertical}
            step={0.001}
            onChange={handleChangeBuyVertical}
          />
        </label>
      </div>
    </div>
  );
};

export default BuyParams;
