import React from "react";
import '../App.css';
import Preview from "../components/Preview";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
// Import Swiper React components
import {Swiper, SwiperSlide, useSwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const MainMobile: React.FC = () => {
    const swiperSlide = useSwiperSlide();

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><Preview/></SwiperSlide>
            <SwiperSlide><Skills/></SwiperSlide>
            <SwiperSlide><Experience/></SwiperSlide>
            <SwiperSlide><Education/></SwiperSlide>

        </Swiper>

    );
}

export default MainMobile;
