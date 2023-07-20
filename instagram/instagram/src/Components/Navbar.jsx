import WrittenLogowhite from '../assets/logowhite.png';
import homeIcon from '../assets/home.svg';
import search from '../assets/search.svg';
import explore from '../assets/explore.svg';
import reels from '../assets/reels.svg';
import messages from '../assets/directMessage.svg';
import notifications from '../assets/notification.svg';
import create from '../assets/create.svg';
import './css/Navbar.css';

function Navbar() {
    return (
        <>
            <div className='Navbar'>
                <div className='logoDiv'>
                    <img className='logo' src={WrittenLogowhite} alt="" />
                </div>
                <div className='NavbarDivs'>
                    <div><img src={homeIcon} alt="" /> <p>Home</p></div>
                    <div><img src={search} alt="" /><p>Search</p></div>
                    <div><img src={explore} alt="" /><p>Explore</p></div>
                    <div><img src={reels} alt="" /><p>Reels</p></div>
                    <div><img src={messages} alt="" /><p>Messages</p></div>
                    <div><img src={notifications} alt="" /><p>Notifications</p></div>
                    <div><img src={create} alt="" /><p>Create</p></div>
                    <div><div></div><p>Profile</p></div>
                </div>
            </div>
        </>
    );
}
export default Navbar;