import React from 'react';
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
//import axios from '../../axios-orders';
class Orders extends React.Component{
    // state={
    //     orders:[],
    //     loading:true
    // }
    componentDidMount(){
        this.props.onFetchOrders(this.props.token,this.props.userId);
    // axios.get('/orders.json')
    // .then(res =>{
    //     //console.log(res.data);  //here we see we get object instead of array of orders from firebase so we convert into array caleed fetchedorders
    //     const fetchedOrders =[];
    //     for(let key in res.data){
    //        fetchedOrders.push({
    //            ...res.data[key],
    //            id:key
    //         }) 
    //     }
    //   this.setState({loading:false,orders:fetchedOrders});
    // })
    }

  render(){
      let orders=<Spinner />;
      if(!this.props.loading){
        orders= this.props.orders.map(order=>(
               <Order key={order.id}
               ingredients={order.ingredients}
               price={order.price}/>
           ))
      }

     return(
         <div>
         {orders}
         </div>
     )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId:state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token,userId) => dispatch( actions.fetchOrders(token,userId) )
    };
};



 export default connect(mapStateToProps,mapDispatchToProps)(Orders);