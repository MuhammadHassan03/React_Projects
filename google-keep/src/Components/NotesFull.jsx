import React from "react";
import Pin from './media/Pin.svg';
import Reminder from './media/Reminders.svg';
import AddFriend from './media/Add-Friend.svg';
import Paint from './media/Paint.svg';
import Image from './media/Image.svg';
import Archieve from './media/Archieve.svg';
import More from './media/More.svg';
import notesFullStyle from './NotesFull.module.css';
function NotesFull() {
    return (
        <div className={notesFullStyle.mainDiv}>
            <div className={notesFullStyle.lowwerMainDiv}>
                <div className={notesFullStyle.div1}>
                    <input className={notesFullStyle.titleinput} type="text" name="" id="" placeholder="Title" />
                    <img className={notesFullStyle.pinImg} src={Pin} alt="" />
                </div>
                <div className={notesFullStyle.div2}>
                    <input className={notesFullStyle.addNoteInput} type="text" name="" id="" placeholder="Take a note...." />
                </div>
                <div className={notesFullStyle.div3}>
                    <div className={notesFullStyle.lidiv}>
                        <li>
                            <img src={Reminder} alt="" />
                            <img src={AddFriend} alt="" />
                            <img src={Paint} alt="" />
                            <img src={Image} alt="" />
                            <img src={Archieve} alt="" />
                            <img src={More} alt="" />
                        </li>
                    </div>
                    <div className={notesFullStyle.liLastDiv}>
                        <button>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NotesFull;