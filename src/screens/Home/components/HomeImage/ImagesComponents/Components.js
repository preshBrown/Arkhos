import React from "react";
import ArkhosAction from "../../../../../images/Offshore_platform_or_oil_rig_in_the_open_ocean_producing_natural_gas_for_energy_stock_videos(1080p).mp4";
import ArkhosAction2 from "../../../../../images/Oil_Industry_high_definition_stock_videos(1080p).mp4";

import imageOneClasses from "./ImageOne.module.css";
import imageTwoClasses from "./ImageTwo.module.css";
import imageThreeClasses from "./ImageThree.module.css";
import Button from "../../../../../components/Interfaces/Button/Button";



const ComponentOne = (props) => {

  return (
    <div style={{ translate: props.translate }}
        className={imageOneClasses.ImageOne} 
    >
      <video className={imageOneClasses.VidIntro} src={ArkhosAction} preload="none" autoPlay muted loop />
      <div className={imageOneClasses.Deam}> </div>
      { props.index &&     <div
        className={`${imageOneClasses.ImageOneChild} ${imageOneClasses.Open}`}
      >
        <h1 className={imageOneClasses.head}>Explore</h1>
        <h1 className={imageOneClasses.head}>Our</h1>
        <h1 className={imageOneClasses.head}>Procurement</h1>
        <h1 className={`${imageOneClasses.head} ${imageOneClasses.lastH}`}>Services</h1>
        <small>Delivering reliable procurement services tailored for Oil & Gas industry.</small>
   
        <Button className={imageOneClasses.btn} to="/">Find Out More</Button>
      </div>}

    </div>
  );
};




const ComponentTwo = (props) => {

  return (
    <div
    style={{ translate: props.translate }}
    className={imageTwoClasses.ImageTwo}
  >
          <video className={imageTwoClasses.VidIntro} src={ArkhosAction2} autoPlay muted loop />
   { props.index &&   <div
      className={`${imageTwoClasses.ImageTwoChild} ${imageTwoClasses.Open}`}
    >
      <h4>Building Foundations For Tomorrow.</h4>
      <small>From pipline to complex infrastructure,</small><br /> 
      <small className={imageTwoClasses}>
       <Button className={imageTwoClasses.Arkhos} to="/"> ARKHOS Oil & Gas Ltd</Button> is at the forefront of construction excellence
      </small>
    </div>}
  </div>


    // <div
    //   style={{ translate: props.translate }}
    //   className={imageTwoClasses.ImageTwo}
    // >
    //  { props.index &&   <div
    //     className={`${imageTwoClasses.ImageTwoChild} ${imageTwoClasses.Open}`}
    //   >
    //     <h4>Quench Your Thirst.</h4>
    //     <small>Stay Cool With Every Sip Of Boldrix.</small><br /> 
    //     <small className={imageTwoClasses.hide}>
    //       Indulge in the rich, bold flavors that make every gathering unforgettable. {" "}
    //     </small>
    //     {/* <button>Get Started</button> */}
    //   </div>}
    // </div>
  );
};




const ComponentThree = (props) => {

  return (
    <div
      style={{ translate: props.translate }}
      className={imageThreeClasses.ImageThree}
    >
    { props.index &&  <div
        className={`${imageThreeClasses.ImageThreeChild} ${imageThreeClasses.Open}`}
      >
        {/* <h4>Slide One</h4> */}
        <h4>Expert Fabrication For Optimal Performance.</h4>
      <small>Our state-of-the-art facilities and skilled</small><br /> 
      <small className={imageTwoClasses}>
        workforce are equipped  to fabricate components that meet international standards.
      </small>
      </div>}
    </div>
  );
};

const Components = [
  { id: "one", Image: ComponentOne },
  { id: "two", Image: ComponentTwo },
  { id: "three", Image: ComponentThree },
];

export default Components;
