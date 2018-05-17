import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

class Chart extends Component{
  constructor(props){
    super(props);
  }
  average(data){
    var sum = data.reduce((a, b) => a + b);
    var avg = sum / data.length;
    return avg;

  }
  render(){
    return(
      <div>
        <Sparklines data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>
        <div>{this.average(this.props.data)}</div>
      </div>

    )
  }
}
export default Chart;
