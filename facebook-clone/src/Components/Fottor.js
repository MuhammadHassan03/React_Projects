import React from "react"
import fottor from "./fottor.module.css"
function Fottor(props){
    return (
        <div className={fottor.main}>
            <div className={fottor.upper}>
                <li>English (UK)</li>
                <li>اردو</li>
                <li>پښتو</li>
                <li>العربية</li>
                <li>हिन्दी</li>
                <li>বাংলা</li>
                <li>ਪੰਜਾਬੀ</li>
                <li>فارسی</li>
                <li>ગુજરાતી</li>
                <li>Deutsch</li>
                <li>Español</li>
                <li><button>+</button></li>
            </div>
                <hr className={fottor.hr}/>

            <div> 
                <div className={fottor.firstRow}>
                    <li><a href="">Sign Up</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Messenger</a></li>
                    <li><a href="">Facebook Lite</a></li>
                    <li><a href="">Watch</a></li>
                    <li><a href="">Places</a></li>
                    <li><a href="">Games</a></li>
                    <li><a href="">Marketplace</a></li>
                    <li><a href="">Meta Pay</a></li>
                    <li><a href="">Meta Store</a></li>
                    <li><a href="">Meta Quest</a></li>
                    <li><a href="">instagram</a></li>
                    <li><a href="">Fundrasiors</a></li>
                    <li><a href="">Services</a></li>
                </div>
                <div className={fottor.secondRow}>
                    <li><a href="">Voting Infromation Center</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Privacy Center</a></li>
                    <li><a href="">Groups</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Create ad</a></li>
                    <li><a href="">Create Page</a></li>
                    <li><a href="">Developers</a></li>
                    <li><a href="">Carrers</a></li>
                    <li><a href="">Cookies</a></li>
                    <li><a href="">AdChoices<img src="https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-6/327241413_707181780795618_6026395122539029146_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lfYA4hB_y5gAX8nMzwM&_nc_ht=scontent.flhe7-1.fna&oh=00_AfBmhtgV6bVqduVK_p7OA6LpKOd9mprPAUYLUgUGkYlS1Q&oe=646F617C"></img></a></li>
                    <li><a href="">Terms</a></li>
                </div>

                <div className={fottor.thirdRow}>
                    <li><a href="">Help</a></li>
                    <li><a href="">Contact uploading and non-usersSettingsActivity log</a></li>
                </div>

                <p>Meta © 2023</p>
            </div>
        </div>
    )
}
export default Fottor;