import React from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import '../App.css';
import {useActions} from "../hooks/useActions";
import {Link} from "react-router-dom";
import {createI18n} from "../i18n/i18n";
import {languages, namespaces} from "../i18n/i18n.constants";
import {useTranslation} from "react-i18next";

const Header: React.FC = () => {
    const {language, loading, error} = useTypedSelector(state => state.info)
    const {changeLanguageToEn, changeLanguageToRu} = useActions()

    console.log(language)
    createI18n(language === "EN" ? languages.ru : languages.en)

    // @ts-ignore
    const {t} = useTranslation(namespaces.common);

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <header className="header">
            <div>
                <span className="logo"><Link to='/'>{t("buttons.preview")}</Link></span>
                <span className="logo"><Link to='/experience'>{t("buttons.experience")}</Link></span>
                <span className="logo"><Link to='/skills'>{t("buttons.skills")}</Link></span>
                <span className="logo"><Link to='/education'>{t("buttons.education")}</Link></span>
                <span className="logo"><a
                    onClick={//TODO: CHANGE TO BUTTON
                        language === "EN" ? changeLanguageToRu : changeLanguageToEn
                    }>{language}</a></span>
            </div>
        </header>


    );
}

export default Header; 