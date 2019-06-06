import React from 'react';
import '../css/App.css';
import DateRangeExample from "../components/DateRangeExample";


class Fechas extends React.Component {
  constructor(props){
    super(props);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.state = {
      startDate: '',
      endDate: ''
    };
  }

  // Receiving from DateRangeExample
  handleStartDate(data) { this.setState({ startDate: data }); }
  handleEndDate(data) { this.setState({ endDate: data }); }

  // Sending to Espacios
  onSelect = (value, states) => {
    this.setState()
  };

  render() {
    return (
        <div>
          <h5>Received in fechas:<br />
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
