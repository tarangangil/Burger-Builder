import React from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
//import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

// we define function here and pass it as a props

// const INGREDIENT_PRICES ={
//      salad: 0.5,
//      cheese:0.4,
//      meat:1.3,
//      bacon:0.7
//  };

class BurgerBuilder extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state={...}
     // }

      state={                        //new way of defining state,we can also define by using constructor 
        //   ingredients:null,
        //   totalPrice:4,
          purchasing:false,
        // loading:false
      }

     
      componentDidMount(){
          console.log(this.props);
          this.props.onInitIngredients();

        //   axios.get('https://react-my-burger-t.firebaseio.com/ingredients.json')
        //   .then(response =>{
        //       this.setState({ingredients:response.data});
        //   })
        
      }


    //    addIngredientHandler = (type) =>{
    //      const oldCount = this.state.ingredients[type];    // when we click on more button of let salad then ye function call hoga and salad ki old value oldCount mai ayegi . const oldCount = this.state.ingredients[salad];      this.state.ingredients[salad] - it refers to the value of salad
    //      const updatedCount = oldCount + 1;                // yhan value ek se badh jayegi.
    //      const updatedIngredients = {                      // updatedIngredients is an array in which jo bhi intially state mai ingredients ke andar define kiya hoga woh sab a jayega . updatedIngredients = salad:0, bacon:0,  cheese:0, meat:0 
    //          ...this.state.ingredients
    //      } ;
    //    updatedIngredients[type] = updatedCount;             //now let we have click on salad then new value of salad will be added to array . updatedIngredients = salad:1, bacon:0,  cheese:0, meat:0 
    //     const priceAddition = INGREDIENT_PRICES[type];      //here we take price of salad
    //     const oldPrice =this.state.totalPrice;              // oldPrice= intial price of burger and it is 4
    //     const newPrice =oldPrice+priceAddition;             
    //      this.setState({
    //          totalPrice:newPrice,
    //          ingredients:updatedIngredients
    //      });
    //   }



    //    removeIngredientHandler = (type) =>{
    //     const oldCount = this.state.ingredients[type];  
    //     if(oldCount <= 0){
    //         return;
    //     }
    //     const updatedCount = oldCount - 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     } ;
    //   updatedIngredients[type] = updatedCount;
    //    const priceDeduction = INGREDIENT_PRICES[type];
    //    const oldPrice =this.state.totalPrice;
    //    const newPrice =oldPrice-priceDeduction;
    //     this.setState({
    //         totalPrice:newPrice,
    //         ingredients:updatedIngredients
    //     });
    //  }
       
     

    //   purchaseHandler() {      //this function will be called when order now button is clicked then onlu it will show order summary
    //     this.setState({
    //      purchasing: true
    //     });
    //   }   
      

      purchaseHandler = () => {      //this function will be called when order now button is clicked then only it will show order summary
         if(this.props.isAuthenticated){
            this.setState({              //we use arrow function when we use 'this' inside function
            purchasing: true
          });  
         }
         else{
             this.props.onSetAuthRedirectPath('/checkout');
             this.props.history.push('/auth');
         }
      }  

      purchaseCancelHandler = () => {     //this function will we called when we click on backdrop
        this.setState({              
            purchasing: false
          });
      }
      
      purchaseContinueHandler = () => {   // this function is for continue
          //alert('You Continue!');
        
    //     const queryParams = [];
    //   for(let i in this.state.ingredients){
    //       queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    //   }
    //     queryParams.push('price=' + this.state.totalPrice); //passing total price from here to checkout  in url
    //   const queryString=queryParams.join('&');
      this.props.onInitPurchase();
      this.props.history.push('/checkout');
    //     {
    //      pathname:'/checkout',
    //      search:'?'+  queryString
    //   });
    }




    
    render(){
      const disabledInfo={
          ...this.props.ings
      };
      for(let key in disabledInfo){
          disabledInfo[key]=  disabledInfo[key] <=0
      }

      let orderSummary=null;
      if(this.props.ings){
     orderSummary= <OrderSummary ingredients={this.props.ings}
      price={this.props.price}
      purchaseCancelled={this.purchaseCancelHandler} 
      purchaseContinued={this.purchaseContinueHandler} />;
      }
    


      let burger=<Spinner />
      if(this.props.ings){
       burger = ( 
            <div>
             <Burger
               ingredients={this.props.ings}/>
    
              <BuildControls                     //props are passed to buildControls
                ingredientAdded={this.props.onIngredientAdded}
                ingredientRemoved={this.props.onIngredientRemoved}
                disabled={disabledInfo}
                price={this.props.price}
                 ordered={this.purchaseHandler}
                 isAuth={this.props.isAuthenticated}/>  
              </div>
              );
            }



        return(
             <div>

                 <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                 {/* <OrderSummary ingredients={this.state.ingredients}
                     price={this.state.totalPrice}
                     purchaseCancelled={this.purchaseCancelHandler} 
                     purchaseContinued={this.purchaseContinueHandler} />;   we use this in let bz abhi kya thaa direct orderSummary dikh rha tha bt ab pehle spineer ayega then orderSummary */} 
                {orderSummary}
                 </Modal>
                  {burger}
              {/* <Burger
               ingredients={this.state.ingredients}/>

              <BuildControls                     //props are passed to buildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                //  ordered={this.purchaseHandler} />        //now we will fetch ingredients from database so we use spinner until data from database is fetch    */} 
            </div> 
        );
    }
}


const mapStateToProps = state => {
    return {
        // ings: state.ingredients,
        // price: state.totalPrice,
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        isAuthenticated:state.auth.token !=null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        // onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        // onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
        //we know use action creators so fro asynchronous code
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase:()=>dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath:(path)=>dispatch(actions.setAuthRedirectPath(path))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);