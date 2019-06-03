import React, { Component } from 'react';
import './css/App.css';

import TextInput from './components/TextInput';
import validate from './components/validate';
import TextArea from './components/TextArea';
import Email from './components/Email';
import Select from './components/Select';
import Radio from './components/Radio';
import Checkbox from './components/Checkbox';
import Password from './components/Password';

import Espacios from './tipos/espacios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      formIsValid: false,
      formControls: {

        name: {
          value: '',
          placeholder: 'What is your name',
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true
          },
          touched: false
        },
        address: {
          value: '',
          placeholder: 'What is your address',
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true
          },
          touched: false
        },
        my_email: {
          value: '',
          placeholder: 'What is your email',
          valid: false,
          validationRules: {
            isRequired: true,
            isEmail: true
          },
          touched: false
        },
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
        },
        my_radio: {
          value: '',
          placeholder: 'Are you a frontend developer',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 0, displayValue: 'Recurso' },
            { value: 1, displayValue: 'Espacio' }
          ]
        },
        password: {
          value: '',
          placeholder: 'Password',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
            minLength: 5,
            maxLength: 10
          }
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





  formSubmitHandler = () => {
		const formData = {};
		for (let formElementId in this.state.formControls) {
			formData[formElementId] = this.state.formControls[formElementId].value
    }
    console.dir(formData);
    console.log('value in Submit: ', formData.my_radio);

    this.renderContent(formData.my_radio);

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
          <Radio name="my_radio"
                  value={this.state.formControls.my_radio.value}
                  onChange={this.changeHandler}
                  options={this.state.formControls.my_radio.options}
                  touched={this.state.formControls.my_radio.touched}
                  valid={this.state.formControls.my_radio.valid}
          />
        </div>
        { this.renderContent(this.state.formControls.my_radio.value) }
        <div>
        <br /><br /><br /><br />
        <TextInput name="name"
                   placeholder={this.state.formControls.name.placeholder}
                   value={this.state.formControls.name.value}
                   onChange={this.changeHandler}
                   touched={this.state.formControls.name.touched}
                   valid={this.state.formControls.name.valid}
        />

        <TextArea name="address"
                  placeholder={this.state.formControls.address.placeholder}
                  value={this.state.formControls.address.value}
                  onChange={this.changeHandler}
                  touched={this.state.formControls.address.touched}
                  valid={this.state.formControls.address.valid}
        />

        <Email name="my_email"
                placeholder={this.state.formControls.my_email.placeholder}
                value={this.state.formControls.my_email.value}
                onChange={this.changeHandler}
                touched={this.state.formControls.my_email.touched}
                valid={this.state.formControls.my_email.valid}
        />

        <Select name="gender"
                value={this.state.formControls.gender.value}
                onChange={this.changeHandler}
                options={this.state.formControls.gender.options}
                touched={this.state.formControls.gender.touched}
                valid={this.state.formControls.gender.valid}
        />

        <Password name="password"
                placeholder={this.state.formControls.password.placeholder}
                value={this.state.formControls.password.value}
                onChange={this.changeHandler}
                touched={this.state.formControls.password.touched}
                valid={this.state.formControls.password.valid}
        />
        </div>

          <button onClick={this.formSubmitHandler}
                  disabled={! this.state.formIsValid}
          >Submit</button>
      </div>
    );

  }
}

export default App;
