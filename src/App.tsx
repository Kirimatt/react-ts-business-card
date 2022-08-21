import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header";
import HeaderMobile from "./mobile-components/HeaderMobile";
import HelmHeader from './components/HelmHeader';
import Main from "./components/Main";
import {BrowserView, MobileView} from 'react-device-detect';
import {createI18n} from "./i18n/i18n";
import MainMobile from "./mobile-components/MainMobile";

const App = () => {
    const [lang, setLang] = useState("EN")

    createI18n(lang.toLowerCase())


    return (
        <div>
            <BrowserView>
                <HelmHeader/>
                <Header
                    // @ts-ignore
                    onChangeLang={() => {
                        return setLang(lang === "EN" ? "RU" : "EN");
                    }}/>
                <Main/>
            </BrowserView>
            <MobileView>
                <HelmHeader/>
                <HeaderMobile
                    // @ts-ignore
                    onChangeLang={() => {
                        return setLang(lang === "EN" ? "RU" : "EN");
                    }}/>
                <MainMobile/>
            </MobileView>
        </div>
    );
};

export default App;