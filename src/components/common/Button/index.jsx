/**
 * pageButton is a custom re-usable component for adding buttons on various pages.
 * It requires a custom pageButton object which provides following:
 * 'buttonClass' (class to be applied to button),
 * 'title' (text for button),
 * 'iconClass' (to show icon associated to button)
 * It also passes back 'onClick event' (triggered upon button click)
 */

import React from "react";
import './index.css';

const PageButton = props => {
  let cls = props.iconClass || '';
  let btnWrapper = props.btnWrapper;
  return (
    <div className={`page-btn ${btnWrapper}`} title={props.tooltip} data-testid='page-button'>
      {(props.pageButton || []).map((btn, index) => (
        <div key={(btn.actionType || '') + index} 
        data-testid={(btn.actionType || '') + index} className='btnGroup'>
          {!!btn.hideButton === false && <button
              type="button"
              className={btn.buttonClass + ' ' + cls}
              onClick={props.onClick}
              disabled={btn.disabled || props.isdisabled}
              data-action-type={btn.actionType}
              data-testid={props.testid ? props.testid : '' }
            >
              <span className={btn.titleClass}>{btn.title}</span> {btn.svg ? <img src={btn.svg} alt="" /> : <i className={btn.iconClass} aria-hidden="true" />}
            </button>}
          
        </div>
      ))}
      {
        props.children
      }
    </div>
  );
};

export default PageButton;
