import React from "react";
import '../App.css';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import PreviewMobile from "./PreviewMobile";
import SkillsMobile from "./SkillsMobile";
import ExperienceMobile from "./ExperienceMobile";
import EducationMobile from "./EducationMobile";

const MainMobile = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
        >
            <SwiperSlide><PreviewMobile/></SwiperSlide>
            <SwiperSlide><SkillsMobile/></SwiperSlide>
            <SwiperSlide><ExperienceMobile/></SwiperSlide>
            <SwiperSlide><EducationMobile/></SwiperSlide>
        </Swiper>
    );
}

export default MainMobile;
