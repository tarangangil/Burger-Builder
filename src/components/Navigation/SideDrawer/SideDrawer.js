import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) =>{
    let attachedClasses =[classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses =[classes.SideDrawer,classes.Open];
    }
  return (
       <div>
           <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')} onClick={props.closed}>
              <Logo height="10%" />   {/* we wiil set height dynamically in toolbar and as weel as in sideDrawer. There is no need to use media query*/}
              <nav>
              <NavigationItems isAuthenticated={props.isAuth} />
              </nav>
      </div>
      </div>
  );

  };
  export default SideDrawer;



