import React from 'react';
import '../css/App.css';
import DateRangeExample from "../components/DateRangeExample";


class Fechas extends React.Component {
  constructor(){
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      fromChild: ''
    };
  }

  handleData(data) {
    this.setState({
      fromChild: data
    });
  }


  render() {
    return (
        <div>
          <h5>Received by parent:<br />{this.state.fromChild}</h5>
          <DateRangeExample handlerFromParant={this.handleData}  />
        </div>
    );
  }
};

export default Fechas;
