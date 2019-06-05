import React from 'react';
import '../css/App.css';
import DateRangeExample from "../components/DateRangeExample";


class Fechas extends React.Component {
  constructor(){
    super();
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.state = {
      startDate: '',
      endDate: ''
    };
  }

  handleStartDate(data) { this.setState({ startDate: data }); }

  handleEndDate(data) { this.setState({ endDate: data }); }

  render() {
    return (
        <div>
          <h5>Received by parent:<br />
            {this.state.startDate}
            {' - '}
            {this.state.endDate}
          </h5>
          <DateRangeExample
            startDate={this.handleStartDate}
            endDate={this.handleEndDate}
          />
        </div>
    );
  }
};

export default Fechas;
