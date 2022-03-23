import React from 'react';

// import css
import styles from "./header.module.css"

// import logo from "../../Image/logo.svg"
import { Link } from 'react-router-dom';

// import {isAuthenticated, signout} from "../SigninForm/helper"

const Header = () => {

	// const logout = () =>{
	// 	signout()
	// 	window.location.reload(false)
	// }

  	return(
        <div className={styles.header}>
            <div className={styles.header_left}>
				<h1>BookMart</h1>
            </div> 
            <div className={styles.header_right}>
				<button className={styles.auth_btn}>Singin / Singup</button>
            </div>
        </div>    
  	) 
}

export default Header;
