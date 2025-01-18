import React from "react";
import { Link } from "react-router-dom";

import classes from "./News.module.css";
import Reveal from "../../../components/Motion/Reveal/Reveal";

const News = () => {
  const data = [
    {
      id: 1,
      item: "Arkhos Oil & Gas Ltd Expands into Diesel and Lubricants Supply Across Key Oil and Gas Regions",
      date: "September 20, 2024",
    },
    {
      id: 2,
      item: "New Milestone: Arkhos Oil & Gas Ltd Delivers High-Quality Sandblasting Services for Offshore Projects",
      date: "September 29, 2024",
    },
    {
      id: 3,
      item: "Driving Efficiency: Arkhos Strengthens Procurement Services for Nigeria's Oil and Gas Sector",
      date: "August 12, 2024",
    },
    {
      id: 4,
      item: "Arkhos Oil & Gas Ltd Enhances Fleet for Marine Logistics, Ensuring Seamless Offshore Support",
      date: "August 18, 2024",
    },
  ];

  return (
    <section style={{ marginTop: "25px", marginBottom: "20px" }}>
      <div className={classes.IntContentWrapper}>
        <header className={classes.IntHeader}>
          <div className={classes.Bar}></div>
          <h2>Latest news</h2>
        </header>

        <div className={classes.NewsItems}>
          {data.map((items) => (
            <div key={items.id} className={classes.NewsItem}>
              <Link>
                <Reveal cover>
                  <h2>{items.item}</h2>
                </Reveal>
              </Link>
              <small>
                <Reveal cover>{items.date}</Reveal>
              </small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
