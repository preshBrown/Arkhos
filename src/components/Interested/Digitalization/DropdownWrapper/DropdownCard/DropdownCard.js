import React, { useEffect, useState } from "react";

import classes from "./DropdownCard.module.css";
import { TiMinus, TiPlus } from "react-icons/ti";
import { FaChevronDown } from "react-icons/fa";

const DropdownCard = (props) => {
  const { limitDropdown, id, closeLimitDropdown, isDropOpen } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isDropOpen === id) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isDropOpen, id]);

  const toggleInfo = () => {
    // setOpen(!open);
    if (isDropOpen === id) {
      console.log("toggle - closeLimt");

      closeLimitDropdown();
    } else {
      limitDropdown(id);
    }
  };
  const openInfo = () => {
    setOpen(true);
  };

  const closeInfo = () => {
    setOpen(false);
  };
  // onClick={openInfo.bind(this)}
  // onClick={closeInfo.bind(this)}

  return (
    <>
      <div className={`${classes.FaqInfo} ${open ? classes.Open : ""}`}>
        <header
          onClick={toggleInfo.bind(this)}
          className={classes.FaqInfoHeader}
        >
          <h4>{props.header}</h4>{" "}
          {/* {open ? (
            <TiMinus className={classes.Icon} size={23} />
          ) : (
            <TiPlus className={classes.Icon} size={23} />
          )} */}
          <FaChevronDown size={20}
            className={classes["toggle-btn"]}
            onClick={toggleInfo.bind()}
          />
          
        </header>
        {open && (
          <div className={classes.FaqInfoDescription}>
            {props.data.map((data) => (
              <React.Fragment key={data.id}>
                <h5>{data.subHeader}</h5>
                <p>{data.description}</p>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownCard;
