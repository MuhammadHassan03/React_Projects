import React from 'react';
import signup from "./signup.module.css";
function Signup(props) {
    return (
        <div className={signup.signup}>
            <div className={signup.form}>
                <h1>SignUp</h1>
                <p className={signup.p1}>It's quick and easy.</p>
                <br className={signup.br1}></br>
                <div className={signup.nameinputdiv}>
                    <input type="text" placeholder='First name' />
                    <input type='text' placeholder='Surname' />
                </div>
                <input type='text' placeholder='Mobile number or email address' />
                <input type="password" placeholder='New Password' />

                <label htmlFor="dob" className={signup.dobLabel}>Date of Birth <img src="https://www.pngkey.com/png/detail/353-3536394_question-mark-black-circle-background.png" alt="" /></label>
                <div className={signup.dob}>
                    <select name="days" id={signup.days}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                    </select>
                    <select name="month" id={signup.month}>
                        <option value="January">January</option>
                        <option value="Febuaray">Febuaray</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                    <select name="year" id={signup.year}>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                    </select>
                </div>
                <label htmlFor="gender" className={signup.dobLabel}>Gender <img src="https://www.pngkey.com/png/detail/353-3536394_question-mark-black-circle-background.png" alt="" /></label>
                <div className={signup.gender}>
                    <div>
                        <input className={signup.igender} type="radio" value='Female' name='gender' /><p>Female</p>
                    </div>
                    <div>
                        <input className={signup.igender} type="radio" name="gender" id="" value='Male' /><p>Male</p>
                    </div>
                    <div>
                        <input className={signup.igender} type="radio" name="gender" id="" value='Other' /><p>Other</p>
                    </div>
                </div>
                <p className={signup.p2}>People who use our service may have uploaded your contact information<br></br> to Facebook. <a href="">Learn more.</a></p>
                <p className={signup.p3}>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.<br></br>You may receive SMS notifications from us and can opt out at any time.</p>
                <div className={signup.divbtn}>
                <button className={signup.btn}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;