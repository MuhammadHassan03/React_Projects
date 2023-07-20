import React, { useEffect, useState } from "react";
import Tick from "./media/Tick.svg";
import paintBrush from './media/Paint.svg'
import ImageNote from './media/Image.svg';
import notesStyle from "./Notes.module.css";
import NotesFull from "./NotesFull";
function Notes(){
    return(
        <div className={notesStyle.mainDiv}>
            <div className={notesStyle.upperDiv}>
                <div className={notesStyle.addNotesDiv}>
                    <input onClick={null}  className={notesStyle.addInput} type="text" name="" id="" placeholder="Take a Note..."/>
                    <img className={notesStyle.tickImg} src={Tick} alt="" />
                    <img className={notesStyle.brushImg} src={paintBrush} alt="" />
                    <img className={notesStyle.imageNote} src={ImageNote} alt="" />
                </div>
            </div>
        </div>
    );
}
export default Notes;