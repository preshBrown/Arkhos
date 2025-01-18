import React from "react";

import { Link } from "react-router-dom";
import classes from "./FooterTopItem.css.module.css";
import XStaggered from "../../../../Motion/XStaggered/XStaggered";

const FooterTopItem = (props) => {





  return (
    <div className={classes.FooterTopItemss}>
      <header>
        <h2>{props.header}</h2>
      </header>
      <ul className={classes.ItemWrapper}>
        {props.itemsData.map((items,index) => (
          <XStaggered index={index} className={classes.FooterTopList}>
            <Link className={classes.ItemContainer} to={items.to}>
             {items.icon &&  <div className={classes.ItemIcons}>{items.icon}</div>}{" "}
              <div>{items.data}</div>
            </Link>
          </XStaggered>
        ))}
      </ul>
    </div>
  );
};

export default FooterTopItem;
