import React from "react";
import threeLinesMenu from "./media/threeLines.svg";
import headerStyle from "./Header.module.css";
import searchIcon from "./media/Search.svg";
import refreshIcon from "./media/Refresh.svg";
import listView from "./media/listView.svg";
import settings from "./media/settings.svg";
function Header() {
  return (
    <div className={headerStyle.headerDiv}>
      <div className={headerStyle.leftDiv}>
        <img className={headerStyle.menuIcon} src={threeLinesMenu} alt="" />
        <img
          className={headerStyle.Logo}
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt=""
        />
        <h2 className={headerStyle.heading}>Keep</h2>
      </div>
      <div className={headerStyle.centerDiv}>
        <img className={headerStyle.searchIcon} src={searchIcon} alt="" />
        
        <input className={headerStyle.searchBox} type="text" name="" id="" placeholder="Search"></input>
      </div>
      <div className={headerStyle.rightDiv}>
        <img className={headerStyle.refreshIcon} src={refreshIcon} alt="" />
        <img className={headerStyle.listView} src={listView} alt="" />
        <img className={headerStyle.settings} src={settings} alt="" />
      </div>
    </div>
  );
}

export default Header;
