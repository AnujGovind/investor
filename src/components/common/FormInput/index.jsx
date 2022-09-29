import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const FormInput = ({
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    error,
    children,
    label,
    disabled,
    onKeyDown,
    maxLength,
    ...props
  }) => {
    let valueToBeShown;
    valueToBeShown=value;
    if(type==="number"){
      if(isNaN(value)){
        valueToBeShown = ""
      }
    }
    return (
      <React.Fragment>
        <label htmlFor={name} className='form-labels'>{label}</label>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={valueToBeShown}
          className={className || "custom form-control"}
          autoComplete="off"
          disabled={disabled || false}
          onKeyDown={onKeyDown}
          maxLength={maxLength||''}
          // style={error && {border: 'solid 1px red'}}
        />
        {/* { error && <p>{ error }</p>} */}
      </React.Fragment>
    )
  }
  
  FormInput.defaultProps = {
    type: "text",
    className: ""
  }
  
  FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'number', 'password']),
    className: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func
  }


export default FormInput;