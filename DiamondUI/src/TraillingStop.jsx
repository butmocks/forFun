import React, { useState } from 'react';

// trailing_stop: true,
// trailing_stop_positive: 0.011,
// trailing_stop_positive_offset: 0.054,
// trailing_only_offset_is_reached: false,

const TrailingStop = () => {
  const trailingStopStatus = ['true', 'false'];
  const [trailingStopValue, setTraillingStopValue] = useState(true);
  const handleChangeStopStatus = event => {
    setTraillingStopValue(event.target.value);
  };

  const trailingOffsetStatus = ['true', 'false'];
  const [trailingOffsetValue, setTraillingOffsetValue] = useState(false);
  const handleChangeOffset = event => {
    setTraillingOffsetValue(event.target.value);
  };

  const [traillingStopPositive, setTraillingStopPossitiveValue] = useState('0.011');
  const handleChangeStopPositive = event => {
    setTraillingStopPossitiveValue(event.target.value);
  };

  const [traillingStopPositiveOffset, setTraillingStopPossitiveOffsetValue] = useState('0.054');
  const handleChangeBuyVertical = event => {
    setTraillingStopPossitiveOffsetValue(event.target.value);
  };

  return (
    <div className="page__content">
      <h3>Trailing Params</h3>

      <label>
        Trailing Stop
        <select value={trailingStopValue} onChange={handleChangeStopStatus}>
          {trailingStopStatus.map(option => (
            <option setTraillingStopValue={option}>{option}</option>
          ))}
        </select>
      </label>

      <div>
        <label>
          Trailing Stop Positive
          <input
            type="number"
            placeholder="default is 0.011"
            value={traillingStopPositive}
            step={0.001}
            onChange={handleChangeStopPositive}
          />
        </label>
      </div>

      <div>
        <label>
          Trailing Stop Positive Offset
          <input
            type="number"
            placeholder="default is 0.054"
            value={traillingStopPositiveOffset}
            step={0.001}
            onChange={handleChangeBuyVertical}
          />
        </label>
      </div>

      <label>
        Trailing Only Offset is Reached
        <select value={trailingOffsetValue} onChange={handleChangeOffset}>
          {trailingOffsetStatus.map(option => (
            <option setValue={option}>{option}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default TrailingStop;

// Трейлинг стоп – это динамический стоп-лосс!
// Трейлинг-стоп следует за ростом цены актива в случае,
// если открыта длинная позиция, и за падением – если
// открыта короткая позиция, находясь на заранее
// определенном расстоянии от текущей цены актива.
// Он обновляется по мере изменения в движении
// вашей позиции на рынке.
