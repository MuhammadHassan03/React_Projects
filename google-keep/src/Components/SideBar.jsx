import React, { useEffect, useState } from "react";
import Bulb from './media/Bulb.svg';
import Reminder from './media/Reminders.svg';
import Edit from './media/Edit.svg';
import Archieve from './media/Archieve.svg';
import Bin from './media/Bin.svg';
import sideBarStyle from './SideBar.module.css';
import Notes from './Notes';
import NotesFull from "./NotesFull";
function SideBar() {
    var isNotes = true;
    const [bodyDiv, setBodyDiv] = useState(null);
    function updateBody(){
        if(isNotes == true){
            isNotes = false;
        }
        else{
            isNotes = true;
        }
        if(isNotes){
            setBodyDiv(<Notes></Notes>)
        }
        else{
            setBodyDiv(<NotesFull></NotesFull>)
        }
    }
    return (
        <div className={sideBarStyle.mainBodyDiv} onClick={updateBody}>
            <div className={sideBarStyle.sideBarMainDiv}>
                <div className={sideBarStyle.Divs}>
                    <img className={sideBarStyle.bulbImg} src={Bulb} alt="" />
                    <div className={sideBarStyle.h2Divs}><h2 className={sideBarStyle.h2s}>Notes</h2></div>
                </div>
                <div className={sideBarStyle.Divs} >
                    <img className={sideBarStyle.reminderImg} src={Reminder} alt="" />
                    <div className={sideBarStyle.h2Divs}><h2 className={sideBarStyle.h2s} >Reminders</h2></div>
                </div>
                <div className={sideBarStyle.Divs}>
                    <img className={sideBarStyle.editImg} src={Edit} alt="" />
                    <div className={sideBarStyle.h2Divs}><h2 className={sideBarStyle.h2s} >Edit Labels</h2></div>
                </div>
                <div className={sideBarStyle.Divs}>
                    <img className={sideBarStyle.archieveImg} src={Archieve} alt="" />
                    <div className={sideBarStyle.h2Divs}><h2 className={sideBarStyle.h2s} >Archieve</h2></div>
                </div>
                <div className={sideBarStyle.Divs}>
                    <img className={sideBarStyle.binImg} src={Bin} alt="" />
                    <div className={sideBarStyle.h2Divs}><h2 className={sideBarStyle.h2s} >Bin</h2></div>
                </div>
            </div>
            <div className={sideBarStyle.mainbodyStyle}>
                {bodyDiv}
                <div className={sideBarStyle.mainBodyDownDiv}>
                    <img className={sideBarStyle.imgMainBodyDownDiv} src={Bulb} alt="" />
                    <h2 className={sideBarStyle.h2}>Notes you add appear here</h2>
                </div>
            </div>
        </div>
    );
};
export default SideBar;