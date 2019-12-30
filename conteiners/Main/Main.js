import React from 'react';
import './Main.scss';
import Info from "./elements/Info";
import Slider from "./elements/Slider";
import Advantages from "./elements/Advantages";

const Main = () => {
    return (
        <main className="main">
            <div className="main__wrap">
                <Info/>
                <Slider/>
            </div>
            <Advantages/>
        </main>
    )
};

export default Main;
