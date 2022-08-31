import React from "react";
import {LeftArrow} from "../mobile-components/LeftArrow";
import {RightArrow} from "../mobile-components/RightArrow";
import {Job} from "../types/Experience";
import cftLogo from "../pages/experience/logocft_en.png";
import epamLogo from "../pages/experience/epam_logo.png";
import oniipLogo from "../pages/experience/oniip_logo.png";
import {useSwiper} from "swiper/react";

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

export const JobElement =(job: Job) => {
    const swiper = useSwiper();
    return (
        <div className="job">
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
            {//TODO:ADD STYLES TO BUTTONS
                }
            <div className="arrow-6__left" onClick={() => swiper.slidePrev()}>
                <LeftArrow/>
            </div>
            <div className="arrow-6__right" onClick={() => swiper.slideNext()}>
                <RightArrow/>
            </div>
        </div>
    )
}