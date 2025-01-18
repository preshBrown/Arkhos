import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li
      onClick={props.clicked}
      className={`${classes.NavItem} ${props.className}`}
    >
      <NavLink
        to={props.to}
        className={(navData) => (navData.isActive ? classes.active : "")}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export const ServicesNav = (props) => {
  const [services, setServices] = useState(false);

  const switchServices = () => {
    setServices(!services);
  };

  return (
    <li className={`${classes.NavItem}`}>
      {services && (
        <div className={classes.ServiceDropdown}>
          <section>
          {props.children}
          </section>
        </div>
      )}

      <span onClick={switchServices}>Services</span>
    </li>
  );
};

export default NavItem;
