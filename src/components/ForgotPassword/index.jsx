import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Form } from "react-bootstrap";
//import { errorMessages } from "../../../constants";
//import { maxLength } from '../../../constants/maxLength';

const ForgotPassword = () => {
  
  const emailRegEx = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return (
    <Fragment>
      <div className="position-relative mt-2">
        <Form 
        // onSubmit={handleSubmit
        // }
        >
          <div className="text-left mb-3">
            <label className="form-labels sub-text">Enter your details and we'll send you a secure mail.</label>
            </div>
            <div className="text-left">
            <label className="form-labels">Email</label>
            <input
              className="login-input"
              type="text"
              name="username"
              placeholder="Enter email"
             // onChange={handleChange}
              //maxLength={maxLength.emailMaxLength + 1}
            />
            {/* <span className="required-star" title="required">*</span> */}
            
           
              <Fragment>
                <input
                  className="mt-4 login-input"
                  type="text"
                  name="domain"
                  placeholder="Domain"
            //      onChange={handleChange}
              //    maxLength={maxLength.domainNameMaxLength + 1}
                />
                {/* <span className="required-star" title="required">*</span> */}
              </Fragment>
            
            {/* {emailErr && (username || '').trim() === '' && (
              <span className="error-txt">{errorMessages.emptyUsername}</span>
            )}
            {username && username.length > (maxLength.emailMaxLength) && (
              <span className="error-txt">{errorMessages.usernameLength}</span>
            )}
            {emailErr && username && !emailRegEx.test(username) && (
              <span id='dsfdf' className="error-txt">{errorMessages.emailNotValid}</span>
            )} */}
          </div>
          <div className="my-4 text-left">
            <button className="login-btn" type="submit">
              Submit
            </button>
          </div>
          <div className="text-left  go-back">
            <NavLink to="/" title="Go Back">
              Go back
            </NavLink>
          </div>
        </Form>
      </div>
    </Fragment>
  );
};
export default ForgotPassword;
