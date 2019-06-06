import React from 'react';

const Radio = props => {
  /*
    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }
*/
    return (
        <div>

            {props.options.map(option => (
                <div key={option.value}>
                    <label className="container">{option.displayValue}
                      <input type="radio"
                          name={props.name}
                          value={option.value}
                          onChange={props.onChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                </div>
            ))}

        </div>
    );
}

export default Radio;
