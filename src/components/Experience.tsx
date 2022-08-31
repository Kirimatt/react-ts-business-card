import React from "react";
import '../App.css';
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import {Virtual} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import {Job} from "../types/Experience";
import {JobElement} from "./Job";


const Experience = () => {
    const {t, ready} = useTranslation(namespaces.pages.experience);
    if (!ready) return <h1>Идет загрузка...</h1>;

    const jobs: any = t('jobs', {returnObjects: true})

    return (
        <div className="flex" style={{maxHeight: '1000px'}}>
            <Swiper
                mousewheel={true}
                slideToClickedSlide={true}
                modules={[Virtual]}
                spaceBetween={50}
                slidesPerView={1}
            >
                {
                    jobs.map((job: Job, index: number) => (
                            <SwiperSlide key={index} virtualIndex={index}>
                                <JobElement companyName={job.companyName} specialization={job.specialization}
                                            date={job.date} icon={job.icon} description={job.description}/>
                            </SwiperSlide>
                        )
                    )
                }
            </Swiper>
        </div>
    );
}

export default Experience;