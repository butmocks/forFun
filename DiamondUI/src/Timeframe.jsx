import React, { useState } from 'react';



const Timeframe = () => {

  const [valueOfTime, setTimeValue] = useState('5');



  const handleChangeTime = event => {
    setTimeValue(event.target.value);
  };


  return (
    <div className="page__content">
      <h2>Timeframe</h2>

      <div>
        <label>
          Set timeframe in minutes
          <input
            type="number"
            placeholder="default is 5"
            value={valueOfTime}
            onChange={handleChangeTime}
          />
        </label>
      </div>

      </div>

  );
};

export default Timeframe;
