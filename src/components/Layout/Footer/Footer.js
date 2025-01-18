import React from "react";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";
import { useSelector } from "react-redux";
import classes from "./Footer.module.css"

const Footer = () => {
  const theme = useSelector((state) => state.ui.theme);

  return (
    <footer className={classes.Footer} theme={theme}>
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
