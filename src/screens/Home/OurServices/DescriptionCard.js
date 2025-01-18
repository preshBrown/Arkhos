import React from 'react'
import classes from "./DescriptionCard.module.css"
import Button from '../../../components/Interfaces/Button/Button'

const DescriptionCard = (props) => {
  return (
    <div className={[classes.DescriptionCard, props.className].join(" ")}>
      <h1>{props.header}</h1>
      <Button to={props.link} className={classes.DesBtn}>Discover More</Button>
    </div>
  )
}

export default DescriptionCard
