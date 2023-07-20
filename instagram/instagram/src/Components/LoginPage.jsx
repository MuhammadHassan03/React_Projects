import { useState } from 'react';
import loginscreen from '../assets/loginscreen.png';
import WrittenLogo from '../assets/WrittenLogo.png';
import facebookLogo from '../assets/facebook.svg';
import GooglePlayBadge from '../assets/GooglePlayBadge.svg';
import MicrosoftBadge from '../assets/MicrosoftBadge.svg';
import './css/LoginScreen.css';
import Fottor from './Fottor.jsx';
import screenShot2 from '../assets/screenshot2.png';
import MainPage from './MainPage';

function LoginPage() {
  const [login, setLogin] = useState(false);

  const loginFunction = () => {
    
    setLogin(true);
  };

  return (
    <>
      {!login && (
        <>
          <div className='LoginMainDiv'>
            <div className='imageDiv'>
              <img src={loginscreen} alt='' />
              <img id='imageDivChanging' src={screenShot2} alt='' />
            </div>

            <div className='formDiv'>
              <form>
                <img src={WrittenLogo} alt='' />
                <input
                  id='usernameField'
                  type='username'
                  placeholder='Phone number, username or email address'
                  value=""
                />
                <div id='passwordDiv'>
                  <input
                    id='passwordField'
                    type='password'
                    name=''
                    placeholder='Password'
                    value=""
                  />
                  <button id='showbtn'>Show</button>
                </div>
                <button onClick={loginFunction} id='loginbtn'>
                  Log in
                </button>
              </form>

              <div className='lineBreakDiv'>
                <hr className='hr' />
                <p>OR</p>
                <hr className='hr' />
              </div>

              <div className='autenticationDiv'>
                <a className='facebooklogina' href=''>
                  <img src={facebookLogo} alt='' />
                  <p>Log in with Facebook</p>
                </a>
                <a className='forgetPassword' href=''>
                  Forgotten Your Password?
                </a>
                <p className='signUpBtn'>
                  Donot have an Account? <a href=''>Sign Up</a>
                </p>
              </div>

              <div className='badgesDiv'>
                <p>Get the App</p>
                <div className='imagesDiv'>
                  <img className='googleImage' src={GooglePlayBadge} alt='' />
                  <img
                    className='microsoftImage'
                    src={MicrosoftBadge}
                    alt=''
                  />
                </div>
              </div>
            </div>

          </div>
          <Fottor />
        </>

      )}

      {login && <MainPage />}

    </>
  );
}

export default LoginPage;
