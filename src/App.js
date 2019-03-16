import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {Route,Switch,withRouter} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import Orders from './container/Orders/Orders';
import Auth from './container/Auth/Auth';
import Logout from './container/Auth/Logout/Logout';
import * as actions from './store/actions/index';
class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
   
    return (
      <div>
         <Layout>    {/* inside component class we pass the things like this. The things inside the component will we pass as a props */}
         <Switch>
         <Route path="/checkout" component={Checkout} />
         <Route path="/orders" component={Orders} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/" exact component={BurgerBuilder} />
        </Switch> 
     
        </Layout>
        
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter(connect(null , mapDispatchToProps )(App));
 