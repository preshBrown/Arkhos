import React from "react";

import { FaLanguage } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";

import { PiWine } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { PiGift } from "react-icons/pi";
import { LuGrape } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import ContentItem, { SidebarMain } from "./SideContentItem/SideContentItem";
import { toggleMode } from "../../../../../../store/ui/uiActions";
import { useSelector, useDispatch } from "react-redux";
import { initTheme } from "../../../../../../store/ui/uiActions";
import SidebarMainWrapper from "./SideContentItem/sidebarMainWrapper";
// import { SidebarMain } from "./SideContentItem/SideContentItem";

import SidebarData from "./SidebarData.json";

import classes from "./SideContents.module.css";
import Button from "../../../../../Interfaces/Button/Button";
import { FaDownload } from "react-icons/fa";
import CompanyProfile from "../../../../../CompanyProfile/CompanyProfile";

const Contents = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  const toggleTheme = () => {
    dispatch(toggleMode());
  };

  const contentItems = [
    { name: "Wines", icons: <PiWine /> },
    { name: "Offers", icons: <BiSolidOffer /> },
    { name: "Gifts", icons: <PiGift /> },
    { name: "Grapes", icons: <LuGrape /> },
    { name: "Regions", icons: <IoLocationOutline /> },
  ];

  const contents = (
    <>
      {/* <ul className={classes.Contents}>
        <ContentItem clicked={toggleTheme.bind()}>
          <IoIosColorPalette style={{ color: "red" }} /> Theme:{" "}
          {theme === "light" ? "light Mode" : "dark Mode"}
        </ContentItem>
      </ul> */}

      <div className={classes.DemoSidebar}>
        < SidebarMainWrapper clicked={props.clicked} />
      </div>
{/* <CompanyProfile /> */}
    </>
  );

  return <nav className={classes.ContentsNav}>{contents}</nav>;
};

export default Contents;
