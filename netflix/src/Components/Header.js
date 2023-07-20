import React from "react";
import headerStyle from "./Header.module.css";


function Header(props){
    return(
    <div className={headerStyle.Head}>
        <h2>LIST OF TOP 5 NETFLIX SERIES IN 2023</h2>
    </div>
    );
}

export default Header;