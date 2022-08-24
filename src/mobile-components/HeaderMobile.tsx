import React, {useState} from "react";
import '../App.css';

//@ts-ignore
const HeaderMobile: React.FC = ({onChangeLang,
                                }) => {
    const [lang, setLang] = useState("EN")

    return (
        <header className="header">
            <div>
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

export default HeaderMobile;

