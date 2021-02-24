import React from 'react';
import ReactDOM from 'react-dom';



const Modal = props => {
  return(
    // in Modals we dont return to JSX elements
    ReactDOM.createPortal(
      //createPortal takes 2 arguments
      <div onClick={props.onDismiss} className='ui dimmer modals visible active'>
        <div onClick={(e) => e.stopPropagation()} className='ui standard modal visible active'>
        <div className="header">{props.title}</div>
        <div className="content">
          {props.content}
        </div>
        <div className="actions">
          {props.actions} 
        </div>
          </div> 

      </div>,
      // index html, modal is added as sibling of root element
      document.querySelector('#modal')
)
    );
}

export default Modal;
