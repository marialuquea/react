import React from "react";
import DateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import '../css/App.css';
import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment);


const stateDefinitions = {
  available: {
    color: null,
    label: 'Available',
  },
  /*
  enquire: {
    color: '#ffd200',
    label: 'Enquire',
  },
  */
  unavailable: {
    selectable: false,
    color: '#78818b',
    label: 'No disponible',
  },
};

const dateRanges = [
  /*
  {
    state: 'enquire',
    range: moment.range(
      moment().add(2, 'weeks').subtract(5, 'days'),
      moment().add(2, 'weeks').add(6, 'days')
    ),
  },
  */
  {
    state: 'unavailable',
    range: moment.range(
      moment().add(3, 'weeks'),
      moment().add(3, 'weeks').add(5, 'days')
    )
  }
];

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    const today = moment();

    this.state = {
      value: moment.range(today.clone(), today.clone())
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

  }


  submitHandler(evt) {
    evt.preventDefault();
    // pass the inputField value to the event handler passed
    // as a prop by the parent (App)
    this.props.handlerFromParant(this.state.value);

    this.setState({
      value: ''
    });
  }


  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }


  onSelect = (value, states) => {
    this.setState({ value, states });
    this.props.handlerFromParant('FUNCIONA');
  };


  renderSelectionValue = () => {
    console.log('Start date: ', this.state.value.start.format("DD-MM-YYYY"));
    console.log('End date: ', this.state.value.end.format("DD-MM-YYYY"));

    return (
      <div>
        <div>Fechas elegidas:</div>
        {this.state.value.start.format("DD-MM-YYYY")}
        {" - "}
        {this.state.value.end.format("DD-MM-YYYY")}
      </div>
    );
  };


  render() {
    return (
      <div>

        <div>{this.renderSelectionValue()}</div>
        <br /> <br />

        {<DateRangePicker
            value={this.state.value}
            onSelect={this.onSelect}
            singleDateRange={true}
            firstOfWeek={1}
            numberOfCalendars={1}
            selectionType='range'
            minimumDate={new Date()}
            stateDefinitions={stateDefinitions}
            dateStates={dateRanges}
            defaultState="available"
            showLegend={true}
        />}
        <button onClick={this.props.triggerParentUpdate}>Siguiente</button>
      </div>
    );
  }
}

export default Example;
