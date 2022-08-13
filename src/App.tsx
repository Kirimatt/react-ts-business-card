import React from 'react';
import './App.css';
import Header from './components/Header';
import HelmHeader from './components/HelmHeader';
import Main from "./components/Main";

const App = () => {
    return (
        <div>
            <HelmHeader/>
            <Header/>
            <Main/>
        </div>
    );
};

export default App;