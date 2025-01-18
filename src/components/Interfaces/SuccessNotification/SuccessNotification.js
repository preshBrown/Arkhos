import React from 'react'
import { IoMdPhonePortrait } from 'react-icons/io';
import CSSTransition from "react-transition-group/CSSTransition";
import classes from "./SuccessNotification.module.css"


const animationTiming = {
    enter: 400,
    exit: 400,
  };
const SuccessNotification = (props) => {



  return (
    <CSSTransition
    mountOnEnter
    unmountOnExit 
    in={props.show}
    timeout={animationTiming}
    classNames={{
      enter: "",
      enterActive: classes.Mopen,
      exit: "",
      exitActive: classes.Mclose,
    }}
  >
    <div className={[classes.SuccessNotification, props.className].join(" ")}>
        <span>Successful</span>
    </div>
    {/* <ModalOverlay {...props} /> */}
  </CSSTransition>
  )
}

export default SuccessNotification
