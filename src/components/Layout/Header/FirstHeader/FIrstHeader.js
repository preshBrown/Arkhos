import React, { useEffect } from "react";
import DivMotion, { YAxisTop, XAxisRight } from "../../../Motion/DivMotion";

import { FaBars } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import NavItems from "../Navigation/NavItems/NavItems";
import Logo from "./fire.png";
import SearchUi from "./SearchUi/SearchUi";
import classes from "./FIrstHeader.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../../../store/ui/uiActions";
import queryData from "../../../Utility/QueryData/QueryData";

const FIrstHeader = (props) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [foundQuery, setFoundQuery] = useState(queryData);

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  // useEffect(() => {

  // }, [searchQuery])

  const toggleTheme = () => {
    dispatch(toggleMode());
  };
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newQuery = [...foundQuery];
    const topQuery = newQuery[0]?.link;
    console.log("🚀 ~ onSubmitHandler ~ topQuery:", topQuery);

    if (topQuery) {
      navigate(`/${topQuery}`);
      setOpenSearch(false);
      setSearchQuery("");
    }
  };

  const setQuery = (value) => {
    console.log("🚀 ~ setQuery ~ value:", value);

    const searchedValue = value.toLocaleLowerCase();
    setSearchQuery(searchedValue);
    const results = queryData.filter((services) =>
      services.name.toLocaleLowerCase().includes(searchedValue)
    );

    setFoundQuery(results);
  };

  const inputHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const searchedValue = e.target.value;
    setSearchQuery(searchedValue);
    const results = queryData.filter((services) =>
      services.name.toLocaleLowerCase().includes(searchedValue)
    );

    setFoundQuery(results);
  };

  const toggleSearch = () => {
    console.log("search clicked");
    setOpenSearch(!openSearch);
    setSearchQuery("");
  };

  
  return (
    <div className={classes.FirstHeader}>
      <DivMotion className={classes.FirstHeaderBrand}>
        <Link to="/">
          <div className={classes.BrandName}>
            <h2>ARKHOS</h2>
            <small>oil and gas</small>
          </div>

          <div className={classes.FireLogo}>
            <img src={Logo} alt="Arkhos" />
          </div>
          {/* <span>ARKHOS</span> */}
        </Link>
      </DivMotion>

      <YAxisTop className={classes.Search}>
        {" "}
        <NavItems
          show={openSearch}
          foundServices={foundQuery}
          searchClicked={toggleSearch.bind(null)}
          setQuery={setQuery}
          value={searchQuery}
          queryLength={searchQuery.length > 0}
          changed={(e) => inputHandler(e)}
          onSubmit={onSubmitHandler}
        />
      </YAxisTop>

      <XAxisRight className={classes.FirstHeaderNav}>
        <span onClick={toggleTheme.bind()} className={classes.icon}>
          {theme === "light" ? <MdDarkMode size={23} /> : <CiLight size={28} />}
        </span>
        <span onClick={toggleSearch}>
          <CiSearch className={classes.icon} size={30} />
        </span>
        <button onClick={props.toggle}>
          <FaBars className={classes.Bar} size={30} />
        </button>{" "}
      </XAxisRight>
    </div>
  );
};

export default FIrstHeader;
