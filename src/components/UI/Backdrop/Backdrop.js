import React from 'react';
import classes from './Backdrop.css'

const Backdrop = (props) =>(            //we use backdrop beacuse jaise he ordersummary ka modal ayega to background black ho jayega
props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div>  :null

);

export default Backdrop;