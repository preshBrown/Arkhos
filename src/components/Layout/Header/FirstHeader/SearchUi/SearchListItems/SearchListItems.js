import React from 'react';
import image from "./Bespoke-bourbon-cream.jpg"
import classes from "./SearchListItems.module.css"
import { Link } from 'react-router-dom';

const SearchListItems = (props) => {

    const list = (
        <li className={classes.ListItem}>
            <Link to="#">
            <article className={classes.ItemContainer}>
                <div className={classes.ImageContainer}>
                    <img src={image} alt='ListItems' />
                </div>
                <div className={classes.Description}>
                    <span>
                   {props.foundServices}
                    </span>
                </div>
            </article>
            </Link>
        </li>
    )
  return (
    <ul  className={classes.SearchListItems}>
    {props.foundServices.map(services => (
      <li onClick={props.setQuery.bind(null, services.name)} className={classes.ListItem} key={services.name}> 
      <Link to="#">
      <article className={classes.ItemContainer}>
          {/* <div className={classes.ImageContainer}>
              <img src={image} alt='ListItems' />
          </div> */}
          <div className={classes.Description}>
              <span>
             {services.name}
              </span>
          </div>
      </article>
      </Link>
  </li>
    ))}
     {props.foundServices.length === 0 && <li className={classes.NoService} ><h3>No Services Found</h3></li>}
    </ul>
  )
}

export default SearchListItems
