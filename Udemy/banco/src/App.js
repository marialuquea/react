import React, { Component } from 'react';
import './css/App.css';

import validate from './components/validate';
import Radio from './components/Radio';

import Espacios from './tipos/espacios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      formIsValid: false,
      formControls: {
        tipo_recurso: {
          value: '',
          placeholder: 'Tipo de recurso',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 0, displayValue: 'Recurso' },
            { value: 1, displayValue: 'Espacio' }
          ]
        }
      }
    }
  }



  changeHandler = event => {
      const name = event.target.name;
      const value = event.target.value;
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
  }


  renderContent(value) {
    if (value === '0'){
      console.log('OLE RECURSO');
      return <div>Recursos listado</div>
    }
    else if (value === '1') {
      console.log('OLE ESPACIO');
      return <Espacios />
    }
    else {
      console.log('NOTHING YET');
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Banco de Recursos</h1>
        <div>
          <p>¿Qué necesitas?</p>
          <Radio name="tipo_recurso"
                  value={this.state.formControls.tipo_recurso.value}
                  onChange={this.changeHandler}
                  options={this.state.formControls.tipo_recurso.options}
                  touched={this.state.formControls.tipo_recurso.touched}
                  valid={this.state.formControls.tipo_recurso.valid}
          />
        </div>
        { this.renderContent(this.state.formControls.tipo_recurso.value) }


      </div>
    );

  }
}

export default App;
