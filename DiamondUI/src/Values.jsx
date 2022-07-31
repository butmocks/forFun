import { useState } from 'react';
import { Picker } from 'react-native';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import React from "react";
  
// class Person extends React.Component {
//   constructor(props) {
//       super(props);
//     console.log(this.props);
//   }
//   render() {
//       console.log(this.props);
//     return null;
//   }
// }
  
// export default Person;






const BuyParams = () => {
  const buy_fast_key = ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'];
  const buy_slow_key = ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'];
const buy_vertical_push = DecimalParameter(0.5, 1.5);
const buy_horizontal_push = IntParameter(0, 10);



}

const SellParams = () => {
  const sell_fast_key = ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'];
const sell_slow_key = ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'];
const sell_vertical_push = DecimalParameter(0.5, 1.5);
const sell_horizontal_push = IntParameter(0, 10);

}


const MinimalRoi = () => {

   0: 0.242,
    13: 0.044,
    51: 0.02,
    170: 0,

}


let StrategyData = {
  buy_params: {
    buy_fast_key: 'high', // ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow']
    buy_horizontal_push: 7,
    buy_slow_key: 'volume',
    buy_vertical_push: 0.942,
  },

  sell_params: {
    sell_fast_key: 'high',
    sell_horizontal_push: 10,
    sell_slow_key: 'low',
    sell_vertical_push: 1.184,
  },

  minimal_roi: {
    0: 0.242,
    13: 0.044,
    51: 0.02,
    170: 0,
  },

  stoploss: -0.271,

  trailing_stop: true,
  trailing_stop_positive: 0.011,
  trailing_stop_positive_offset: 0.054,
  trailing_only_offset_is_reached: false,

  timeframe: '5m',
};
export default StrategyData;

const [buyFastValue, setBuyFastValue] = useState('high');
const [buy_fast_key] = useState(
  ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'].sort(),
);
<Picker
  style={{ marginVertical: 10 }}
  selectedValue={buyFastValue}
  onValueChange={itemVal => {
    setBuyFastValue(itemVal);
  }}
>
  {buy_fast_key.map(l => (
    <Picker.Item label={l} value={l} />
  ))}
</Picker>;

console.log(buy_fast_key);

const [sellFastValue, setSellFastValue] = useState('high');
const [sell_fast_key] = useState(
  ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'].sort(),
);

const [buySlowValue, setBuySlowValue] = useState('volume');
const [buy_slow_key] = useState(
  ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'].sort(),
);

const [sellSlowValue, setSellSlowValue] = useState('low');
const [sell_slow_key] = useState(
  ['open', 'high', 'low', 'close', 'volume', 'ma_fast', 'ma_slow'].sort(),
);

const buy_vertical_push = DecimalParameter(0.5, 1.5);
const buy_horizontal_push = IntParameter(0, 10);

const sell_vertical_push = DecimalParameter(0.5, 1.5);
const sell_horizontal_push = IntParameter(0, 10);
