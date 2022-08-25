import React from "react";
import '../App.css';
import {Link} from "react-router-dom";
import {namespaces} from "../i18n/i18n.constants";
import {useTranslation} from "react-i18next";
import {HeaderType} from "../types/HeaderType";

export const Header = (Config: HeaderType) => {
    const {t} = useTranslation(namespaces.common);

    return (
        <header className="header">
            <div>
                <span className="logo"><Link to='/'>{t("buttons.preview")}</Link></span>
                <span className="logo"><Link to='/experience'>{t("buttons.experience")}</Link></span>
                <span className="logo"><Link to='/skills'>{t("buttons.skills")}</Link></span>
                <span className="logo"><Link to='/education'>{t("buttons.education")}</Link></span>

                <button className="langButton" onClick={Config.handleChangeLanguage}>
                    {Config.lang === "EN" ? "RU" : "EN"}
                </button>

            </div>
        </header>
    );
}

