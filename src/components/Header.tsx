import React, {useState} from "react";
import '../App.css';
import {Link} from "react-router-dom";
import {namespaces} from "../i18n/i18n.constants";
import {useTranslation} from "react-i18next";

//@ts-ignore
export const Header: React.FC = ({onChangeLang,
                                 }) => {

    const [lang, setLang] = useState("EN")

    // @ts-ignore
    const {t} = useTranslation(namespaces.common);

    return (
        <header className="header">
            <div>
                <span className="logo"><Link to='/'>{t("buttons.preview")}</Link></span>
                <span className="logo"><Link to='/experience'>{t("buttons.experience")}</Link></span>
                <span className="logo"><Link to='/skills'>{t("buttons.skills")}</Link></span>
                <span className="logo"><Link to='/education'>{t("buttons.education")}</Link></span>
                <span className="logo"><a
                    onClick={
                        () => {
                            onChangeLang();
                            setLang(lang === "EN" ? "RU" : "EN");
                        }
                    }>{lang === "EN" ? "RU" : "EN"}</a></span>
            </div>
        </header>
    );
}

