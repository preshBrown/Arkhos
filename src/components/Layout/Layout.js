import React, { useState, useEffect, Suspense } from "react";

import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import SideDrawer from "./Header/Navigation/SideDrawer/SideDrawer";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Layout.module.css";
import { initTheme } from "../../store/ui/uiActions";
import ValidAge from "../../screens/ValidAge/ValidAge";
import SuspenseLoader from "../Interfaces/SuspenseLoader/SuspenseLoader";
import SuccessNotification from "../Interfaces/SuccessNotification/SuccessNotification";

const Layout = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);
  const successNotification = useSelector((state) => state.ui.successNotification);

  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const selectedTheme = localStorage.getItem("Theme");

  useEffect(() => {
    if (selectedTheme) dispatch(initTheme(selectedTheme));
  }, [dispatch, selectedTheme]);

  const toggleSide = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  const closeSide = () => {
    setShowSideDrawer(false);
  };
  return (
    <div data-theme={theme} className={classes.LayoutWrapper}>
      <Header toggle={toggleSide} />
      <SideDrawer show={showSideDrawer} close={closeSide} />
      {/* <ValidAge /> */}
      <SuccessNotification show={successNotification} />

      <main className={classes.Layout}>
      <Suspense fallback={<SuspenseLoader theme={theme} />}>
        <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
