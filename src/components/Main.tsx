import React from "react";
import '../App.css';
import Preview from "./Preview";
import Skills from "./Skills";
import {Route, Routes} from "react-router-dom";
import Experience from "./Experience";
import Education from "./Education";

const Main: React.FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Preview/>}/>
            <Route path={'/skills'} element={<Skills/>}/>
            <Route path={'/experience'} element={<Experience/>}/>
            <Route path={'/education'} element={<Education/>}/>
        </Routes>
    );
}

export default Main;
