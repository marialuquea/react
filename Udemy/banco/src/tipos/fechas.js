import React from 'react';
import '../css/App.css';
import DateRangeExample from "../components/DateRangeExample";


class Fechas extends React.Component {
  constructor(props){
    super(props);
    this.handleDates = this.handleDates.bind(this);
    this.state = {
      dates: ''
    };
  }

  // Receiving from DateRangeExample
  handleDates(data) {
    console.log('In fechas: ', data);
    this.setState({ dates: data });
  }

  // Sending to espacios
  onSelect = () => {
    this.props.dates('IYOOOOOO');
  };


  render() {
    return (
        <div>
          <h5>Received in fechas:<br />
            {this.state.dates}
          </h5>
          <DateRangeExample
            dates={this.onSelect}
          />
        </div>
    );
  }
};

export default Fechas;
