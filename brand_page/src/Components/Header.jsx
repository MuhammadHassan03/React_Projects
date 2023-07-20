import logo from './assets/logo.svg';
import headerStyle from "./css/Header.module.css";
function Header(){
    return(
        <>
        <div className={headerStyle.headerMainDiv}>
            <div className={headerStyle.firstDiv}>
                <img src={logo} alt="" />
            </div>
            <div className={headerStyle.secondDiv}>
                <li><a href="">Menu</a></li>
                <li><a href="">Location</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </div>
            <div className={headerStyle.thirdDiv}> 
                <button>Login</button>
            </div>
        </div>
    </>
    );
}
export default Header;