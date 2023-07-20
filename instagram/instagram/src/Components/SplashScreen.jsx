import logo from "../assets/logo.svg";
import meta from '../assets/meta.svg';
import './css/SplashScreen.css';

function SplashScreen() {

    
    return (
        <>
            <div className="SplashScreen">
                <div className="logoDiv">
                    <img src={logo} alt="" />
                </div>
            </div>
            <footer>
                    <div className="metaDiv">
                        <div className="metaDivDiv">
                            <p>From </p>
                            <img src={meta} alt="" />
                        </div>
                    </div>
                </footer>
        </>
    );
}
export default SplashScreen;