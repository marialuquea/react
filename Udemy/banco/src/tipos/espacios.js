import React, { Component } from 'react';

import Select from '../components/Select';
import validate from '../components/validate';

class Espacios extends Component {
  constructor() {
    super();
    this.state = {
      formIsValid: false,
      formControls: {

        espacio: {
          value: '',
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
        usos_multiples_opciones: {
          value: '',
          placeholder: 'Elige el tipo de usos multiples',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 'sala1', displayValue: 'I Sala de Teatro/Danza (min 1 persona)' },
            { value: 'sala2', displayValue: 'II Sala (min 5 personas)'},
            { value: 'sala3', displayValue: 'III Sala de Teatro/Danza (min 5 personas)' }
          ]
        }
      }
    }
  }


  changeHandler = event => {
      const name = event.target.name;
      const value = event.target.value;

      console.log(value);

      const updatedControls = {
        ...this.state.formControls
      };
      const updatedFormElement = {
        ...updatedControls[name]
      };
      updatedFormElement.value = value;
      updatedFormElement.touched = true;
      updatedFormElement.valid = validate(value, updatedFormElement.validationRules);
      updatedControls[name] = updatedFormElement;

      let formIsValid = true;
      for (let inputIdentifier in updatedControls) {
        formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
      }
      this.setState({
        formControls: updatedControls,
        formIsValid: formIsValid
      });

      /*
      const formData = {};
      for (let formElementId in this.state.formControls) {
  			formData[formElementId] = this.state.formControls[formElementId].value
      }
      console.dir(formData);
      */
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

        { this.renderMoreOptions(this.state.formControls.espacio.value) }

      </div>
    );

  }
}

export default Espacios;
