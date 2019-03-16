import React from 'react';
import classes from './BuildControl.css';

const BuildControl = (props) =>(     //this means it will recieve a prop
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
       <button className={classes.More} onClick={props.added}>More</button>  {/* when we click on more button then command go from  BuildControl ->  BuildControls -> BurgerBuilder */}
    </div>
);

export default BuildControl;