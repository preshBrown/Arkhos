import React, { useState } from "react";
import SidebarData from "../SidebarData.json";
import { useDispatch, useSelector } from "react-redux";
import { initTheme } from "../../../../../../../store/ui/uiActions";
import { SidebarMain } from "./SideContentItem";
import DataStructureSidebar from "./DataStructureSidebar";

const SidebarMainWrapper = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  const [lan, setLan] = useState("Chn");

  const switchTheme = (type, id) => {
    if (type === "Theme") {
      console.log(type, id);
      return dispatch(initTheme(id));
    }

    if (type === "Language") {
     setLan(id)
    }
    if (type === "Logout") {
      console.log("LOGOUT");
      
     }

  };

  return (
    <>
      {DataStructureSidebar.map((item, index) => (
        <SidebarMain
        clicked={props.clicked}
          key={item.title}
          language={lan}
          themeCode={theme}
          toggleTheme={switchTheme}
          item={item}
        />
      ))}
    </>
  );
};

export default SidebarMainWrapper;
