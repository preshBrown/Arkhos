import React, { useEffect, useState } from "react";
import classes from "./CountCard.module.css";

const CountCard = (props) => {
    const {count, description} = props

  const [initiaCount, setCountInitiaCount] = useState(0);

  useEffect(() => {
  
    if (initiaCount < count) {
        const interval = setInterval(() => setCountInitiaCount(initiaCount + 2), 0.01);
        return () => clearInterval(interval);
        
    }
  }, [initiaCount]);



  return (
    <div className={classes.CountCard}>
      <h2>
        {initiaCount}
        <span>+</span>
      </h2>
      <small>{description}</small>
    </div>
  );
};

export default CountCard;
