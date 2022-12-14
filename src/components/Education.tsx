import React from "react";
import '../App.css';
import educationUrl from '../pages/education/omgups_logo.png';
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";

const Education: React.FC = () => {

    const {t} = useTranslation(namespaces.pages.education);

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

        </div>
    );
}

export default Education;