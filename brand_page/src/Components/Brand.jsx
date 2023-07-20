import flipkart from "./assets/flipkart.svg";
import amazon from './assets/amazon.svg';
import Shoe from './assets/Shoe.svg';
import brandStyle from './css/Brand.module.css';
function Brand() {
    return (
        <>
            <div className={brandStyle.mainDiv}>
                <div className={brandStyle.leftDiv}>
                    <h2 className={brandStyle.h2}>YOUR FEET <br /> DESERVE <br /> THE BEST</h2>
                    <br className={brandStyle.brs}/>
                    <p className={brandStyle.p}>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br /> SHOES.</p>
                    <br className={brandStyle.brs}/>
                    <div className={brandStyle.btnDiv}>
                        <button id={brandStyle.btn1}>Shop Now</button>
                        <button id={brandStyle.btn2}>Category</button>
                    </div>
                    <div className={brandStyle.availableTag}>
                        <br className={brandStyle.brs}/>
                        <p>Also Available on</p>
                        <div>
                            <img className={brandStyle.availableTagImg1} src={flipkart} alt="" />
                            
                            <img className={brandStyle.availableTagImg2} src={amazon} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Shoe} alt="" />
                </div>
            </div>
        </>
    );
}
export default Brand;