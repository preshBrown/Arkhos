import React, { useEffect, useState } from "react";
import HomeImage from "./components/HomeImage/HomeImage";
import ProductCollections from "./components/ProductsCategory/ProductCollections";
import { useDispatch, useSelector } from "react-redux";

import {
  initBestPicks,
  initRecommended,
  initHotDeals,
  initnewArrivals,
} from "../../store/product/productActions";
import {
  bestPickItems,
  recommendedItems,
  hotDealsItems,
  newArrivalsItems,
} from "./HomeData";
import Category from "../../components/Category/Category";
import DemoImage from "../../components/DemoImage/DemoImage";
import Components from "./components/HomeImage/ImagesComponents/Components";
import HomeLoadingSpinner from "../../components/Interfaces/HomeLoadingSpinner/HomeLoadingSpinner";
import ValidAge from "../ValidAge/ValidAge";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import CountExperience from "./CountExperience/CountExperience";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Interesting from "./Interest/Interest";
import OurServices from "./OurServices/OurServices";
import News from "./News/News";
import CustomSlider from "./CustomSlider/CustomSlider";

const Home = (props) => {
  const dispatch = useDispatch();
const [initHome, setInitHome] = useState(true)


  useEffect(() => {
   const setTiming = setTimeout(() => (
      setInitHome(false)
    ), 800)

    return () => clearTimeout(setTiming)

  }, []);

  let homeSpinner = <HomeLoadingSpinner />;
  if (
    !initHome
  ) {
    homeSpinner = null;
  }

  return (
    <>
      {homeSpinner}
      <HomeImage images={Components} />
      <WhoWeAre path="/about" />
      <CountExperience />
      <WhatWeDo path="about" />
      <OurServices />
      <Interesting />
      <News />
    </>
  );
};

export default Home;
