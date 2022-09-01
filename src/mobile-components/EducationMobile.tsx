import React from "react";
import '../App.css';
import educationUrl from '../pages/education/omgups_logo.png';
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import {LeftArrow} from "./LeftArrow";
import {RightArrow} from "./RightArrow";
import {useSwiper} from "swiper/react";

const Education: React.FC = () => {

    const {t} = useTranslation(namespaces.pages.education);
    const swiper = useSwiper()
    return (
        <div className="hero">
            <div className="container hero__container">
                <div className="hero__about">
                    <h1 className="hero__title">{t("name")}</h1>
                    <h2 className="hero__subtitle">{t("specialization")}</h2>
                    <p className="hero__description">
                        {t("degree")}
                    </p>
                </div>

                <div className="hero__box__green">
                    <img className="hero__box-img" src={educationUrl} alt=""/>
                </div>

            </div>
            <div className="arrow-6__left__mobile" onClick={() => swiper.slidePrev()}>
                <LeftArrow/>
            </div>
            <div className="arrow-6__right__mobile" onClick={() => swiper.slideNext()}>
                <RightArrow/>
            </div>
        </div>
    );
}

export default Education;