import React from 'react';
import { connect } from 'react-redux';

// import { withRouter } from 'react-router-dom';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
// import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';
import * as actions from '../../../store/actions/index';

class ContactData extends React.Component{
    state={
        orderForm:{
                name:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Your Name'
                    },
                    value:'' ,
                    validation:{
                        required:true
                    },     
                    valid:false,
                    touched:false
                },
               street:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Street'
                },
                value:'',
                validation:{
                    required:true
                },    
                 valid:false,
                 touched:false
            },
               zipcode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'ZIP Code'
                },
                value:'',
                validation:{
                    required:true,minLength:5,maxLength:5
                },
                valid:false,
                touched:false
            },
                country:{
                    elementType:'input',
                    elementConfig:{
                        type:'text',
                        placeholder:'Country'
                    },
                    value:'',
                      validation:{
                        required:true
                    },
                    valid:false,
                    touched:false
                },
                email:{
                    elementType:'input',
                    elementConfig:{
                        type:'email',
                        placeholder:'Your E-Mail'
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false
                },
                deliveryMethod:{
                    elementType:'select',
                    elementConfig:{
                        options:[{value:'fastest',displayValue:'Fastest'},
                                 {value:'fastest',displayValue:'Cheapest'}]
                    },
                    value:'fastest',
                    validation:{},
                    valid:true
                },
        },
          formIsValid:false,
        //   loading:false
        }
        orderHandler=(event)=>{
          event.preventDefault();
        //   console.log(this.props.ingredients);
        //   this.setState({loading:true});
          const formData={};
          for(let formElementIdentifier in this.state.orderForm){          //fromElementIdentifier is name,e-mail
             formData[formElementIdentifier]=this.state.orderForm[formElementIdentifier].value;       //here added property to formData like name ,email and then their value to it
          }   
            const order={
                 ingredients: this.props.ings,
                 price: this.props.price,
                 orderData:formData,
                 userId:this.props.userId
             }
             this.props.onOrderBurger(order,this.props.token);

            // axios.post('/orders.json',order)
            // .then(response=> {
            //     this.setState({loading:false});
            //     this.props.history.push('/');
            // })
            // .catch(error => {
            //    this.setState({loading:false});
            // });
        }
        
         checkValidity(value,rules){
             let isValid=true;
           if(rules.required){
               isValid=value.trim() !== '' && isValid;
           }
           if(rules.minLength){
            isValid=value.length>=rules.minLength && isValid;
        }
        if(rules.maxLength){
            isValid=value.length>=rules.maxLength && isValid;
        }
           return isValid;
         }

        inputChangedHandler =(event,inputIdentifier) =>{
            // console.log(event.target.value);
            const updatedOrderForm ={
                ...this.state.orderForm    //distributed the property of orderForm name and street and etc
            }
            const updatedFormElement={
               ...updatedOrderForm[inputIdentifier]   //here we get reference to e-mail or name so that we can access inside this
            }
            updatedFormElement.value=event.target.value;
            updatedFormElement.valid=this.checkValidity(updatedFormElement.value,updatedFormElement.validation);
            updatedFormElement.touched=true;
            updatedOrderForm[inputIdentifier]=updatedFormElement;

            let formIsValid=true;
            for(let inputIdentifier in updatedOrderForm){
                formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
            }
            this.setState({orderForm:updatedOrderForm,formIsValid:formIsValid});

        }


        render(){
            const formElementArray =[];
            for(let key in this.state.orderForm){          //key in orderfrom are name,street,zipcode etc
                formElementArray.push({
                    id:key,
                    config:this.state.orderForm[key]        // here elementtype or elementconfig of particular key
                });
            }

            let form = (
                <form onSubmit={this.orderHandler}>
                {/* <Input elementType="..." elementConfig="..." value="..." /> */}
                {formElementArray.map(formElement =>(
                  <Input
                  key={formElement.id}
                  elementType={formElement.config.elementType}
                  elementConfig={formElement.config.elementConfig}
                  value={formElement.config.value}
                  invalid={!formElement.config.valid}
                  shouldValidate={formElement.config.validation}
                  touched={formElement.config.touched}
                  changed={(event) => this.inputChangedHandler (event,formElement.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid} >ORDER</Button>
                 </form>
            );
            if (this.props.loading){
                form=<Spinner />
            }
            return (
                <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
               {form}
                </div>
            )
        }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading:state.order.loading,
        token:state.auth.token,
        userId:state.auth.userId
    }
};

const mapDispatchToProps = dispatch => {
    return{
    onOrderBurger : (orderData,token) => dispatch(actions.purchaseBurger(orderData,token))
    }
};



export default connect(mapStateToProps,mapDispatchToProps)(ContactData);