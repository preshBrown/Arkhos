import React from "react";

import ReactDOM from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../../../Interfaces/Backdrop/Backdrop";
import SideNavItems from "./SideNav/SideNavItems/SideNavItems";
import SideContents from "./SideContents/SideContents";
import Logo from "./fire.png";
import { Link } from "react-router-dom";
import CSSTransition from "react-transition-group/CSSTransition";
import { useSelector } from "react-redux";
import CompanyProfile from "../../../../CompanyProfile/CompanyProfile";
// import DynamicSidebar from "../../../../DynamicSidebar/DynamicSidebar";

const animationTiming = {
  enter: 300,
  exit: 300,
};
const SideDrawer = (props) => {
  const theme = useSelector((state) => state.ui.theme);

  const sideContent = (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: classes.OpenSide,
        exit: "",
        exitActive: classes.CloseSide,
      }}
    >
      <aside data-theme={theme} className={classes.SideDrawer}>
        {/* <Backdrop show={props.show} clicked={props.close} /> */}
        <section>
          <div className={classes.SideDrawerHeader}>
          <Link to="/">
          <div className={classes.BrandName}>
            <h2>ARKHOS</h2>
            <small>oil and gas</small>
          </div>

          <div className={classes.FireLogo}>
            <img src={Logo} alt="Arkhos" />
          </div>
          {/* <span>ARKHOS</span> */}
        </Link>
            <span onClick={props.close}>
              <IoCloseOutline size={23} />
            </span>
          </div>
          <div onClick={props.close} className={classes.SideNavItems}>
            <SideNavItems />
          </div>

          <div className={classes.SideContents}>
            <SideContents clicked={props.close} />
          </div>
        </section>

        <CompanyProfile className={classes.SideCompanyProfile} />
      </aside>
    </CSSTransition>
  );
  return (
    <React.Fragment>
      <div className={classes.BackdropDisplayControl}>
      <Backdrop show={props.show} clicked={props.close} />
      </div>
      {ReactDOM.createPortal(
        sideContent,
        document.getElementById("sidedrawer-hook")
      )}
    </React.Fragment>
  );
};

export default SideDrawer;
