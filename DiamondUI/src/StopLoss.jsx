import React, { useState } from 'react';


const StopLoss = () => {



  // const buy_horizontal_push = [0, 10];
  const [valueStopLoss, setStopLossValue] = useState('-0.271');


  const handleChangeStopLoss = event => {
    setStopLossValue(event.target.value);
  };


  return (
    <div className="page__content">
      <h2>Stop Loss</h2>

      <div>
        <label>
          Stop Loss value
          <input
            type="number"
            placeholder="default is -0.271"
            value={valueStopLoss}
            step={0.001}
            onChange={handleChangeStopLoss}
          />
        </label>
      </div>

    </div>
  );
};

export default StopLoss





