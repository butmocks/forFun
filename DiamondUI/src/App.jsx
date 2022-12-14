import React from 'react';
import BuyParams from './BuyParams';
import SellParams from './SellParams';
import MinimalRoi from './MinimalRoi';
import StopLoss from './StopLoss';
import TrailingStop from './TraillingStop';
import Timeframe from './Timeframe';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <form>
        <BuyParams />
        <SellParams />

        <MinimalRoi />
        <StopLoss />
        <TrailingStop />
        <Timeframe />
      </form>
    );
  }
}

export default App;
