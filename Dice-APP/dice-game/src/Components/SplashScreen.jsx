import logo from "./assets/logo.svg";
import splashStyle from "./css/SplashScreen.module.css";
function SplashScreen(props) {
    
    return (
        <>
            <div id={splashStyle.mainDiv}>
                <div id={splashStyle.leftDiv}>
                    <img src={logo} alt="" />
                </div>
                <div id={splashStyle.rightDiv}>
                    <h2>DICE GAME</h2>
                    <div id={splashStyle.divInRightDiv}>
                        <button onClick={props.toggle}>Play Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SplashScreen;