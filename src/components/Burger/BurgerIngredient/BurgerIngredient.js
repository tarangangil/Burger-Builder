import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';


// const BurgerIngredient = (props) =>{             // we use this syntax of stateless function when we only want to return anything. we cannot use function inside this for that we have to basic syntax
//    let ingredient =null;
//    switch(props.type){
//        case('bread-bottom'):
//        ingredient=<div classes={classes.BreadBottom}></div>;
//        break;

//        case('bread-top'):
//    ingredient=(
//                 <div classes={classes.BreadBottom}>
//                 <div classes={classes.Seeds1}></div>
//                 <div classes={classes.Seeds2}></div>
//                 </div>
//                  );
//        break;

//        case('meat'):
//        ingredient=<div classes={classes.Meat}></div>;
//        break;

//        case('cheese'):
//        ingredient=<div classes={classes.Cheese}></div>;
//        break;

//        case('bacon'):
//        ingredient=<div classes={classes.Bacon}></div>;
//        break;

//        case('salad'):
//        ingredient=<div classes={classes.Salad}></div>;
//        break;

//        default:
//        ingredient=null;
      
//    }

//          return   ingredient;
// };



class BurgerIngredient extends React.Component{
    render(){

           let ingredient =null;
          
           switch(this.props.type){

                case('bread-bottom'):
                ingredient=<div className={classes.BreadBottom}></div>;
                break;
         
                case('bread-top'):
                ingredient=(
                         <div className={classes.BreadTop}>
                         <div className={classes.Seeds1}></div>
                         <div className={classes.Seeds2}></div>
                         </div>
                          );
                break;
         
                case('meat'):
                ingredient=<div className={classes.Meat}></div>;
                break;
         
                case('cheese'):
                ingredient=<div className={classes.Cheese}></div>;
                break;
         
                case('bacon'):
                ingredient=<div className={classes.Bacon}></div>;
                break;
         
                case('salad'):
                ingredient=<div className={classes.Salad}></div>;
                break;
         
                default:
                ingredient=null;
               
            }
         
                  return ingredient;
        }
    }

  BurgerIngredient.propTypes={
   type: PropTypes.string.isRequired
  };



 
export default BurgerIngredient;