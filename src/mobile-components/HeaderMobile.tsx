import React from "react";
import '../App.css';
import {HeaderType} from "../types/HeaderType";

const HeaderMobile = (Config: HeaderType) => {
    return (
        <header className="header">
            <div>
                <button className="langMobileButton" onClick={Config.handleChangeLanguage}>
                    {Config.lang === "EN" ? "RU" : "EN"}
                </button>
            </div>
        </header>
    );
}

export default HeaderMobile;

