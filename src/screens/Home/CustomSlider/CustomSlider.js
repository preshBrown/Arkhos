import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "./PiplineFabricationandInstallationHome.jpg";
import slide_image_2 from "./FabricationandConstruction-Home.jpg";
import slide_image_3 from "./Procurement-Home-2.jpg";
import slide_image_4 from "./lubricant-Supply.jpg";
import slide_image_5 from "./Logistics_Expertise.jpeg";
import slide_image_6 from "./offshore-supplyhome.jpeg";
import slide_image_7 from "./Marine-services-home.jpg";

// import classes from "./CustomSlider.module.css";
import plain from "./plain.css";
import { MdArrowLeft, MdArrowRightAlt } from "react-icons/md";
import DescriptionCard from "../OurServices/DescriptionCard";

const CustomSlider = () => {


  return(
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
          <DescriptionCard link="/pipeline-fabrication-nstallation" header="Pipeline Fabrication & Installation" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
                    <DescriptionCard link="/Construction-fabrication" header="Construction & Fabrication" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
                    <DescriptionCard link="/d-l-s" header="Procurement" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
                    <DescriptionCard link="/d-l-s" header="Diesel / Lubricant Supply" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
                    <DescriptionCard link="/logistics" header="Logistics" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
                    <DescriptionCard link="/offsure-supply" header="Offshore Supply" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
          <DescriptionCard link="/platform-supply-vessls" header="Marine Services" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )

 
};

export default CustomSlider;

// https://github.com/emetdas/Youtube-code/tree/master/web%20components/React-Swiper-Slider-3D-Coverflow
