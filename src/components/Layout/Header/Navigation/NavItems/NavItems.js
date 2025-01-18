import React, { useEffect, useState } from "react";

import { CiSearch } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import NavItem, { ServicesNav } from "./NavItem/NavItem";
import classes from "./NavItems.module.css";
import AuthModal from "../../../../Interfaces/AuthModal/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { openAuthUi, closeAuthUi } from "../../../../../store/ui/uiActions";
import { RiStore3Fill } from "react-icons/ri";
import Modal from "../../../../Interfaces/Modal/Modal";
import SearchUi from "../../FirstHeader/SearchUi/SearchUi";
import { useNavigate } from "react-router-dom";
import FilterModal from "../../../../../screens/ProductsStore/FilterLayout/FilterModal/FilterModal";
import SearchListItems from "../../FirstHeader/SearchUi/SearchListItems/SearchListItems";
import HeaderServices from "./HeaderServices/HeaderServices";

const NavItems = (props) => {


  return (
    <>
      <FilterModal
        footerClass={classes.FilterModalFooterClass}
        // contentClass={classes.contentClass}
        header={
          <span className={classes.ClientHeader}>
            <span className={classes.ClientHeaderIcon}>
              <CiSearch  />
            </span>
            Search Services
          </span>
        }
        show={props.show}
        close={props.searchClicked}
      >
        <div className={classes.SearchWrapper}>
          <SearchUi value={props.value} changed={props.changed} onSubmit={props.onSubmit} />
          {/* <span className={classes.LoadingWrapper}>L-D</span> */}
         {props.queryLength && <article className={classes.SearchListWrapper}>
            <SearchListItems  setQuery={props.setQuery} foundServices={props.foundServices} />
          </article>}
        </div>
      </FilterModal>

      <ul className={[classes.NavItems, props.className].join(" ")}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        {/* <NavItem to="/jj">Services</NavItem> */}
        <ServicesNav>
          <HeaderServices />
        </ServicesNav>
         <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </ul>
    </>
  );
};

export default NavItems;
