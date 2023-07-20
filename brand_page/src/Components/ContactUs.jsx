import contactStyle from './css/ContactUs.module.css';
import messageIcon from './assets/message.svg';
import messageBlack from './assets/messageBlack.svg';
import phoneIcon from './assets/call.svg';
import serviesImg from './assets/services.jpg';
function ContactUs() {
    return (
        <>
            <div className={contactStyle.mainUpperDiv}>
                <div className={contactStyle.mainDiv}>
                    <div className={contactStyle.contactusTag}>
                        <h2 className={contactStyle.h2}>CONTACT US</h2>
                        <p className={contactStyle.p}>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR <br /> JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR <br /> SOCIAL MEDIA.</p>
                    </div>
                    <div className={contactStyle.contactFormTag}>
                        <div className={contactStyle.twoDivs}>
                            <div>
                                <button className={contactStyle.btn1}>
                                    <img src={messageIcon} alt="" />
                                    <p>VIA SUPPORT CHAT</p>
                                </button>
                            </div>
                            <div>
                                <div className={contactStyle.btn2}>
                                    <img src={phoneIcon} alt="" />
                                    <p>VIA CALL</p>
                                </div>
                            </div>
                        </div>
                        <div className={contactStyle.emailFormDiv}>
                            <img src={messageBlack} alt="" />
                            <p>VIA EMAIL FORM</p>
                        </div>
                    </div>
                    <div className={contactStyle.inputsDiv}>
                        <div className={contactStyle.inputDiv1}>
                            <div>
                                <p>Name</p>
                                <input id={contactStyle.name} type="text" />
                            </div>
                        </div>
                        <div className={contactStyle.inputDiv1}>
                            <div >
                                <p>Email</p>
                                <input id={contactStyle.name} type="email" />
                            </div>
                        </div>
                        <div className={contactStyle.inputDiv1}>
                            <div>
                                <p>Text</p>
                                <input id={contactStyle.text} type="text" />
                            </div>
                        </div>
                        <div className={contactStyle.inputBtn}>
                            <button>SUBMIT</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}
export default ContactUs;