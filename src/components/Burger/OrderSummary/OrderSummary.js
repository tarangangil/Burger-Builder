import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary=(props) => {                 //we make this bz after clicking on order now we ant to show summary of what he ordered
     const ingredientSummary= Object.keys(props.ingredients)
     .map(igkey =>{
         return (<li><span style={{textTransform:'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}</li>);
     });


  return (   <div>
       <h3>Your Order</h3>
       <p>A delicious burger with the following ingredients:</p>
       <ul>
         {ingredientSummary}
       </ul>
       <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
       <p>Continue to Checkout?</p>
       <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
       <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
     </div>
  );
};

export default OrderSummary;