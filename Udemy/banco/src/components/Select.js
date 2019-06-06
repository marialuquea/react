import React from 'react';

const Select = props => {


    return (
        <div>
            <select
              name={props.name}
              value={props.value}
              onChange={props.onChange}
            >
                {props.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>

        </div>
    );
}

export default Select;
