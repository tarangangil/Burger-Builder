import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
 import DrawerToogle from '../SideDrawer/DrawerToogle/DrawerToogle';


const Toolbar = (props) =>(
    <header className={classes.Toolbar}>
       <div className={classes.MobileOnly}>
         <DrawerToogle  clicked={props.DrawerToogleClicked}/>  
         </div>
        <Logo height="80%"/>    {/* we wiil set height dynamically in toolbar and as well as in sideDrawer. There is no need to use media query*/} 
        
        <nav class={classes.DekstopOnly}>
         <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);
export default Toolbar;