import React, { Component } from 'react';

import Select from '../components/Select';
import validate from '../components/validate';
import Fechas from './fechas.js';

const nothing = '---';

class Espacios extends Component {
  constructor(props) {
    super(props);
    this.handleDatesE = this.handleDatesE.bind(this);
    this.state = {
      formIsValid: false,
      formControls: {
        espacio: { // Select inicial
          value: nothing,
          placeholder: 'Elige el tipo de espacio',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 'artes_plasticas', displayValue: 'Artes Plasticas (min 5 personas)' },
            { value: 'usos_multiples', displayValue: 'Usos multiples'},
            { value: 'naranja_azul', displayValue: 'Salas naranja o azul' },
            { value: 'patios', displayValue: 'Patios' },
            { value: 'actos', displayValue: 'Salones de actos' },
            { value: 'reuniones', displayValue: 'Salas de reuniones' }
          ]
        },
        usos_multiples_opciones: { // Select para usos multiples
          value: nothing,
          placeholder: 'Elige el tipo de usos multiples',
          valid: true,
          touched: false,
          validationRules: {
            //isRequired: true,
          },
          options: [
            { value: 'sala1', displayValue: 'I Sala de Teatro/Danza (min 1 persona)' },
            { value: 'sala2', displayValue: 'II Sala (min 5 personas)'},
            { value: 'sala3', displayValue: 'III Sala de Teatro/Danza (min 5 personas)' }
          ]
        },
        naranja_azul_opciones: { // Select sala azul o naranja
          value: nothing,
          placeholder: 'Elige el tipo de sala',
          valid: true,
          touched: false,
          validationRules: {
            //isRequired: true,
          },
          options: [
            { value: 'naranja', displayValue: 'Sala naranja (min 5 personas)' },
            { value: 'azul', displayValue: 'Sala azul (min 1 persona)'}
          ]
        },
        patios_opciones: { // Select de patios
          value: nothing,
          placeholder: 'Elige el tipo de patio',
          valid: true,
          touched: false,
          validationRules: {
            //isRequired: true,
          },
          options: [
            { value: 'principal', displayValue: 'Patio principal' },
            { value: 'trasero', displayValue: 'Patio trasero'}
          ]
        },

        dates: {
          value: '',
          dates: '',
          valid: true,
          touched: false,
          validationRules: {
            isRequired: true
          }
        }
      }
    }
  }


  changeHandler = event => {

      this.resetValues();

      const name = event.target.name;
      const value = event.target.value;

      //console.log('value: ', value);

      const updatedControls = { ...this.state.formControls  };
      const updatedFormElement = {  ...updatedControls[name]  };

      //console.log('updatedControls: ',  this.state.formControls);
      //console.log('');
      //console.log('updatedFormElement: ', updatedControls[name]);

      updatedFormElement.value = value;
      updatedFormElement.touched = true;
      updatedFormElement.valid = validate(value, updatedFormElement.validationRules);
      //console.log('validate: ', validate(value, updatedFormElement.validationRules));
      //console.log('uFE: ', updatedFormElement.valid);
      updatedControls[name] = updatedFormElement;

      let formIsValid = true;
      for (let inputIdentifier in updatedControls) {
        formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        //console.log('1: ', updatedControls[inputIdentifier].valid && formIsValid);
      }
      this.setState({
        formControls: updatedControls,
        formIsValid: formIsValid
      });
      //console.log('this.state.formIsValid: ', this.state.formIsValid);

  }


  resetValues() {
    const names = ['usos_multiples_opciones', 'naranja_azul_opciones', 'patios_opciones'];
    const updatedControls = { ...this.state.formControls  };
    //console.log('updatedControls:', updatedControls);
    //console.log(updatedControls['dates']);
    for (const i in names) {
      updatedControls[names[i]].value = nothing;
      //console.log('names[' ,i, ']: ', names[i]);
      //console.log('updatedControls[names[i]]: ', updatedControls[names[i]]);
      //console.log('updatedControls[names[i]].value:', updatedControls[names[i]].value);
    }
    this.setState({
      formControls: updatedControls
    });
  }

  renderMoreOptions(value) {
    if (value === 'usos_multiples') {
      return (
        <Select name="usos_multiples_opciones"
                value={this.state.formControls.usos_multiples_opciones.value}
                onChange={this.changeHandler}
                options={this.state.formControls.usos_multiples_opciones.options}
                touched={this.state.formControls.usos_multiples_opciones.touched}
                valid={this.state.formControls.usos_multiples_opciones.valid}
        />
      );
    }
    if (value === 'naranja_azul') {
      return (
        <Select name="naranja_azul_opciones"
                value={this.state.formControls.naranja_azul_opciones.value}
                onChange={this.changeHandler}
                options={this.state.formControls.naranja_azul_opciones.options}
                touched={this.state.formControls.naranja_azul_opciones.touched}
                valid={this.state.formControls.naranja_azul_opciones.valid}
        />
      );
    }
    if (value === 'patios') {
      return (
        <Select name="patios_opciones"
                value={this.state.formControls.patios_opciones.value}
                onChange={this.changeHandler}
                options={this.state.formControls.patios_opciones.options}
                touched={this.state.formControls.patios_opciones.touched}
                valid={this.state.formControls.patios_opciones.valid}
        />
      );
    }
  }

  handleDatesE(data) {
    const updatedControls = { ...this.state.formControls  };
    updatedControls['dates'].value = data;
    this.setState({
      formControls: updatedControls
    });
    console.log('try: ', this.state.formControls['dates'].value);
  }

  choose_dates(value) {
    //console.log('choose_dates en espacios.js');
    return <Fechas dates={this.handleDatesE}/>
  }



  formSubmitHandler = () => {
    const formData = {};
    for (let formElementId in this.state.formControls) {
      formData[formElementId] = this.state.formControls[formElementId].value
    }
    console.dir(formData);
  }


  render() {
    return (
      <div className="App">

        <Select name="espacio"
                value={this.state.formControls.espacio.value}
                onChange={this.changeHandler}
                options={this.state.formControls.espacio.options}
                touched={this.state.formControls.espacio.touched}
                valid={this.state.formControls.espacio.valid}
        />
        <br />
        <h5>Received in espacios:<br />
          {this.state.startDate}
          {' - '}
          {this.state.endDate}
        </h5>
        <br />

        { this.renderMoreOptions(this.state.formControls.espacio.value) }
        <br />
        { this.choose_dates(this.state.formControls.patios_opciones.value) }
        <br />
        <button
          onClick={this.formSubmitHandler}
          disabled={! this.state.formIsValid} >Siguiente
        </button>
      </div>
    );

  }
}

export default Espacios;
