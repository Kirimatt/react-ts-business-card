import React from "react";
import '../App.css';
import epamLogo from '../pages/experience/epam_logo.png'
import oniipLogo from '../pages/experience/oniip_logo.png'
import cftLogo from '../pages/experience/logocft_en.png'
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import {Virtual} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';

const logo = (logoString: string): string => {
    switch (logoString) {
        case 'cftLogo':
            return cftLogo;
        case 'epamLogo':
            return epamLogo;
        case 'oniipLogo':
            return oniipLogo;
        default:
            return '';
    }
}

const Experience = () => {

    const {t, ready} = useTranslation(namespaces.pages.experience);

    if (!ready) return <h1>Идет загрузка...</h1>;

    const jobs: any = t('jobs', {returnObjects: true})

    return (
        <div className="flex">
            <Swiper mousewheel={true}
                    slideToClickedSlide={true}
                    direction="vertical"
                    modules={[Virtual]}
                    spaceBetween={50}
                    slidesPerView={1}>
                {
                    jobs.map((job: Job, index: number) => (
                            <SwiperSlide key={index} virtualIndex={index}>
                                <div className="job" key={index}>
                                    <div className="hero">
                                        <div className="container hero__container">
                                            <div className="hero__about">
                                                <h1 className="hero__title">{job.companyName}</h1>
                                                <h2 className="hero__subtitle">{job.specialization}</h2>
                                                <br/>

                                                <h2 className="hero__subtitle">{job.date}</h2>

                                                <div className="hero__descriptions">
                                                    {
                                                        job.description.map((desc: string, index: number) => (
                                                            <p className="hero__description" key={index}>
                                                                {desc}
                                                            </p>
                                                        ))
                                                    }
                                                </div>

                                            </div>

                                            <div className="hero__box">
                                                <img className="hero__box-img" src={
                                                    logo(job.icon)
                                                } alt="logo"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        )
                    )
                }
            </Swiper>
        </div>
    );
}

export default Experience;