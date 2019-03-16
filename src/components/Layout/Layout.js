import React from 'react';
import { connect } from 'react-redux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

   class Layout extends React.Component {
    state={
      ShowSideDrawer:false
    } 
    SideDrawerClosedHandler = () => {
       this.setState({ ShowSideDrawer:false});
     }

    //  SideDrawerToogleHandler =()=>  {
    //      this.setState({ ShowSideDrawer :!this.state.ShowSideDrawer});   //we cannot use state in setState due to asynchronous nature of setState it will led to unexpected output
    //  }
      
    SideDrawerToogleHandler = () =>  {
        this.setState( (prevState) => {
        return {ShowSideDrawer :!prevState.ShowSideDrawer};
    } );   
    }

       render(){
           return( 
           <div>
            {/* <div>Toolbar, sideDrawer, Backdrop</div> */}
             <Toolbar 
             isAuth={this.props.isAuthenticated}
             DrawerToogleClicked={this.SideDrawerToogleHandler} />
            <SideDrawer  
             isAuth={this.props.isAuthenticated}
            open={this.state.ShowSideDrawer} 
            closed={this.SideDrawerClosedHandler}/>

                <main className={classes.Content}>
                {this.props.children}
                </main>
        
             </div>
             );
       }
    }
 
    const mapStateToProps = state => {
        return {
            isAuthenticated: state.auth.token !== null
        };
    };
    
    export default connect( mapStateToProps )( Layout );