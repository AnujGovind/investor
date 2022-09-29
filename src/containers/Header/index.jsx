import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Header =()=>{
    return (
      <nav className="navbar-hgt w-100">
        <div className="d-flex pad05 mx-2">
          <div className="mr-auto align-self-center">
            <i className="logo hand" 
           // onClick={() => this.logoClick()}
             />
          </div>
      <div className="right-side-items">
          {window.location.href && (!href.includes('release-notes') && !href.includes('not-found')) ?
            <Fragment>
           
                 <div className="global-search-click mr-2">
                  <div className="align-self-center" >
                    <Search
                    />
                    <div className="search-big-popup position-absolute bg-white">
                                         </div>
                  </div>
                </div>

             
              <div className="align-self-center">
                 
                  UserInfo
                 
              </div>
            </Fragment> : null}
        </div>
        </div>
      </nav>
      
    );
  }
}
}

export default Header

