import React from 'react';
import classes from  './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal=(props) => ( 
    <div>
         <Backdrop show={props.show} clicked={props.modalClosed}/>  {/*if modal is shown then backdrop should we shown thatwhy it would we simple to use backdrop here  */}
    <div className={classes.Modal}
    style={{transform: props.show? 'translateY(0)' :'translateY(-100vh)',
            opacity : props.show? '1': '0'
      }}>

        {props.children}
    </div>
    </div>
);

export default Modal;