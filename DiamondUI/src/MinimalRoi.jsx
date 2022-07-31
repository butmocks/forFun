import React, { useState } from 'react'


const MinimalRoi = () => {

  const [roiValues, setRoiValue] = useState('0.242');

  const handleSubmit = event => {
    setRoiValue(event.target.value);
  };

  const resetRadioState = () => {
    setRoiValue('0.242')
  }

  return (
    <form>
      <p>Minimal Roi</p>
      <div>
        <input type="radio"
        value= '0.242'
        checked={roiValues === '0.242'}
        onChange={handleSubmit} />
        {'0'}
      </div>

      <div>
        <input type="radio"
        value='0.044'
        checked={roiValues === '0.044'}
        onChange={handleSubmit}
        />
        {'13'}
      </div>

      <div>
        <input type="radio"
        value='0.02'
        checked={roiValues === '0.02'}
        onChange={handleSubmit} />
        {'51'}
      </div>

      <div>
        <input type="radio"
        value='0'
        checked={roiValues === '0'}
        onChange={handleSubmit} />
        {'170'}
      </div>

      <div>
        <button className='resetButton' type="reset" onClick={resetRadioState}>Reset Roi</button>
      </div>
    </form>
  );
};
export default MinimalRoi;

