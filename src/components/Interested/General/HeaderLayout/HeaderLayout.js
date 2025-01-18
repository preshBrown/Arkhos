
import React from 'react'
import classes from "./HeaderLayout.module.css";
import Reveal from '../../../Motion/Reveal/Reveal';

const HeaderLayout = (props) => {
  return (
    <>
       <header className={classes.HeaderLayoutHeader}>
        <div className={classes.HeaderLayoutImageWrapper}>
          <img src={props.img} alt="D-IMG" />
        </div>

        <article className={classes.HeaderLayoutSubHeader}>
          <h1>
          <Reveal cover>
            {props.subHeader}
          </Reveal>
            </h1>
          <p>
          <Reveal cover>
           {props.contents}
          </Reveal>
          </p>
        </article>
      </header>
    </>
  )
}

export default HeaderLayout
