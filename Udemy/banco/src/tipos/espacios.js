import React, { Component } from 'react';

import Select from '../components/Select';
import validate from '../components/validate';

class Espacios extends Component {
  constructor() {
    super();
    this.state = {
      formIsValid: false,
      formControls: {

        gender: {
          value: '',
          placeholder: 'What is your gender',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 'male', displayValue: 'Male' },
            { value: 'female', displayValue: 'Female'}
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


  // NOT NEEDED HERE
  formSubmitHandler = () => {
		const formData = {};
		for (let formElementId in this.state.formControls) {
			formData[formElementId] = this.state.formControls[formElementId].value
    }
    console.dir(formData);
    console.log('value in Submit: ', formData.my_radio);

    this.renderContent(formData.my_radio);

  }


  render() {
    return (
      <div className="App">

        <Select name="gender"
                value={this.state.formControls.gender.value}
                onChange={this.changeHandler}
                options={this.state.formControls.gender.options}
                touched={this.state.formControls.gender.touched}
                valid={this.state.formControls.gender.valid}
        />

      </div>
    );

  }
}

export default Espacios;
