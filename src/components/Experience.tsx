import React from "react";
import '../App.css';
import epamLogo from '../pages/experience/epam_logo.png'
import oniipLogo from '../pages/experience/oniip_logo.png'
import cftLogo from '../pages/experience/logocft_en.png'
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";

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

const Experience: React.FC = () => {


    // @ts-ignore
    const {t, ready} = useTranslation(namespaces.pages.experience);

    if (!ready) return <h1>Идет загрузка...</h1>;


    const jobs = t('jobs', {returnObjects: true})

    return (
        <div className="flex">
            {
                // @ts-ignore
                jobs.map((job) => (
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
                                            // @ts-ignore
                                            job.description.map((desc) => (
                                                <p className="hero__description">
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
                ))
            }
        </div>
    );
}

export default Experience;