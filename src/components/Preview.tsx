import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import '../App.css';
import photoUrl from '../pages/index/photo_of_me.png';
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";

const Preview: React.FC = () => {
    const {loading, error} = useTypedSelector(state => state.info)
    // @ts-ignore
    const {t} = useTranslation(namespaces.pages.preview);

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="hero">
            <div className="container hero__container">
                <div className="hero__about">
                    <h1 className="hero__title">{t("specialization")}</h1>
                    <h2 className="hero__subtitle">{t("name")}</h2>
                    <p className="hero__description">
                        {t("description")}
                    </p>

                    <div className="hero__links">
                        <a className="hero__link" href="https://t.me/kirimatt"><i className='bx bxl-telegram'></i></a>
                        <a className="hero__link" href="https://www.linkedin.com/in/azamat-segizbaev-341637227/"><i
                            className='bx bxl-linkedin'></i></a>
                        <a className="hero__link" href="https://github.com/Kirimatt/"><i className='bx bxl-github'></i></a>
                        <a className="hero__link"
                           href="https://drive.google.com/file/d/1jwWhhBVSxkpyhH71mtCzDM2MPp6ut-RZ/view?usp=sharing"><i
                            className='bx bxs-download'></i></a>
                    </div>

                </div>

                <div className="hero__box">
                    <img className="hero__box-img" src={photoUrl} alt="photo_of_me"/>
                </div>

            </div>

        </div>
    );
}

export default Preview; 