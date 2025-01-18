import React, { useState } from "react";

import { PiWifiXBold } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";

import classes from "./SideContentItem.module.css";

const ContentItem = (props) => {
  return (
    <li className={classes.ContentItem}>
      <button onClick={props.clicked}>{props.children}</button>
    </li>
  );
};

export const SidebarMain = (props) => {
  const { item } = props;
  const [open, setOpen] = useState(false);

  const toggleItem = () => {
    setOpen(!open);
  };

  if (item.childrens)
    return (
      <div
        className={`${classes["sidebar-item"]}  ${open ? classes.open : ""}`}
        
      >
        <div className={classes["sidebar-title"]}
        onClick={toggleItem.bind()}
        >
          <span>
            {item.icon && <span className={classes["i"]}> {item.icon}</span>}
            <span> {item.title}</span>
          </span>

          <FaChevronDown
            className={classes["toggle-btn"]}
            onClick={toggleItem.bind()}
          />
        </div>
        <div className={classes["sidebar-content"]}>
          {item.childrens.map((child, index) => (
            <SidebarMain {...props} key={child.title} item={child} />
          ))}
        </div>
      </div>
    );

  if (item.path)
    return (
      <NavLink
      onClick={props.clicked}
        to={item.path}
        className={(navData) =>
          navData.isActive
            ? `${classes["sidebar-item"]}  ${classes.plain}  ${classes.sideNavActive}`
            : `${classes["sidebar-item"]}  ${classes.plain}`
        }
        // className={`${classes["sidebar-item"]}  ${classes.plain}`}
      >
        {/* {item.icon && <item.icon className={classes["i"]} />} */}
        {item.icon && <span className={classes["i"]}> {item.icon}</span>}{" "}
        {item.title}
      </NavLink>
    );

  return (
    <button
      onClick={props.toggleTheme.bind(this, item.type, item.title)}
      className={`${classes["sidebar-item"]}  ${classes.btn}`}
    >
      {/* {item.icon && <item.icon className={classes["i"]} />} {item.title}{" "} */}
      {item.icon && <span className={classes["i"]}> {item.icon}</span>}{" "}
      {item.title}{" "}
      {(props.themeCode === item.title || props.language === item.title) && (
        <CiCircleCheck
          size={14}
          className={`${classes["i"]} ${classes.btnActive}`}
        />
      )}
    </button>
  );
};

export default ContentItem;
