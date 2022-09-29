import React, { Fragment,useState } from "react";
import Product from '../Product';
import './index.css';
import { useSelector } from 'react-redux';
import { getProductsList } from '../../store/products';
import { Form } from "react-bootstrap";
import FormInput from '../common/FormInput/index';
import icon_eye_hide from '../../assets/icons/icon_eye_hide.svg';
import icon_eye_show from '../../assets/icons/icon_eye_hide.svg';
import logo from '../../assets/icons/logo.svg';
import ArrowRight from '../../assets/iconsComponent/ArrowRight';
import { NavLink } from "react-router-dom";
import login_page from '../../assets/icons/login-page-graphic.svg'

const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordInputType, setPasswordInputType] = useState('password');
  return (
           
  <div className='row col-md-12 ml-0 pl-0 login-container'>
                 
                  <div className={'pt-6 login-form'}>
                  <img alt="logoImage" src={login_page} />

</div>
            <div className="row">
                         <div className="col-3 header-logo pointer" onClick={() => this.handleReload()}>
                             <img alt="logoImage" src={logo} />
                        </div>
                    </div>
            <Form  autoComplete="off" >
          <div className="text-left">
            <label className="form-labels">Email</label>
            <input
              className="login-input"
              type="text"
              name="username"
             // value={username}
              aria-label="email"
              placeholder="Enter email"
              //onChange={handleChange}
              autoComplete="off"
              //disabled={isDisabled}
            />
        </div>
      
            < Fragment >
              <div className="mt-3 text-left">
                <div>
                  <label className="form-labels">Password</label>
                  <input
                    className="login-input"
                   type={passwordInputType}
                    name="password"
                   // value={password}
                    aria-label="login"
                    placeholder="Enter password"
                    //onChange={this.props.handleChange}
                    autoComplete="new-password"
                    //disabled={isDisabled}
                    />
                  {/* <span className="required-star" title="required">*</span> */}
                  <span
                    className="position-absolute show-eye-container"
                    //onClick={handleShowHidePassword}
                  >
                    <span
                      className="show-eye"
                      title={passwordInputType === "text" ? "Hide" : "Show"}
                    >
                      <img
                        alt=""
                        src={
                          passwordInputType === "text"
                            ? icon_eye_show
                            :  icon_eye_hide
                        }
                        className="show-password-eye-green position-absolute hand"
                      />
                    </span>
                  </span>
                </div>

                {/* {submitted && !password && (
                  <span className="error-txt">{errorMessages.emptyPassword}</span>
                )} */}
              </div>
           
                <div className="mt-3 text-left login-slot">
                  <label className="custom-checkbox">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      //checked={rememberMe ? 'checked' : ''}
                    //  onChange={() => toggleRememberMe()}
                    />
                    <span className="checkmark" />
                  </label>
                  <div className="rem-text ml-3">Remember me</div>
                </div>
              
             
            </Fragment>
            <div className="mt-3 text-left">
            <button className="login-btn" type="submit">
              Login
            </button>
            {
         // showRegister &&
              <span className="register-link">
                <NavLink
                  to="/register"
                  title="Register"
                  className="go-back txt-color-green"
                >
                  Register <ArrowRight fillColor="#248700" />
                </NavLink>
              </span>
            }
          </div>
         
          
            <div className="mt-3 text-left">
              <NavLink
                to="/forgot-password"
                title="Forgot Password"
                className="go-back txt-color-green"
              >
                Forgot Password
              </NavLink>
            </div>
         
        
        </Form>
        </div>
    );
}
export default Login;
