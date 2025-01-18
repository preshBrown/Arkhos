import React from "react";
import classes from  "./HContent.module.css"

const HContent = () => {
  const items = [
    { id: 1, content: "Choose a Tasker by price, skills, and reviews." },
    { id: 2, content: "Schedule a Tasker as early as today." },
    { id: 3, content: "Chat, pay, tip, and review all in one place." },
    // {id: 4, content: "Choose a Tasker by price, skills, and reviews."},
  ];

  return (
    <article className={classes.HContent}>
      <h1>How It Works</h1>
      <ul className={classes.Items}>
        {items.map((item) => (
          <li key={item.id} className={classes.Item}>
            <h2>{item.id}</h2>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default HContent;
