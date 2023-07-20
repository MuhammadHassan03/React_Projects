import React from 'react';
import loginStyle from './loginpage.module.css';
import Signup from './signup.js'



function LoginPage(){

    function createAccountHandler(){
        
    }

        return(
            <div className={loginStyle.maindiv}>
                <div className={loginStyle.leftdiv}>
                <img className={loginStyle.img} src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
                <p className={loginStyle.p}>Facebook helps you connect and share <br></br> with the people in your life.</p>
                </div>

                <div className={loginStyle.form}>
                    <div className={loginStyle.mainform}>
                        <input className={loginStyle.input} type="email" placeholder='Email address or phone number'/>
                        <input className={loginStyle.input}   type="password" placeholder='Password'/>
                        <button className={loginStyle.btn1}>Log in</button>
                        <a href="" className={loginStyle.ancher}>Forgotten password?</a>
                        <hr className={loginStyle.solid}/>
                        <button className={loginStyle.btn2} onClick={createAccountHandler}>Create new account</button>
                    </div>
                </div>
                
            </div>
        )
}


export default LoginPage;