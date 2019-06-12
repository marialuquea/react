import React from 'react';
import '../css/App.css';
import DateRangeExample from "../components/DateRangeExample";


class Fechas extends React.Component {

  onSelect = (data) => {
    this.props.dates(data);
  };

  render() {
    return (
        <div>
          <DateRangeExample dates={this.onSelect} />;
        </div>
    );
  }
};

export default Fechas;
