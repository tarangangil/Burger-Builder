import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const Controls=[
         {label:'Salad', type:'salad'},
         {label:'Bacon', type:'bacon'},
         {label:'Cheese', type:'cheese'},
         {label:'Meat', type:'meat'},

];

const BuildControls = (props) =>(
    <div className={classes.BuildControls}>
     <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>

     {Controls.map (ctrl => (
         <BuildControl
          key ={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}    //here u receieve the prop with type from BurgerBuilder
          disabled={props.disabled[ctrl.type]}/>
     ))}

     <button className={classes.OrderButton} 
     onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
    </div>
);

export default BuildControls;