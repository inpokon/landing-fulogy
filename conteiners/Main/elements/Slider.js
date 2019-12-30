import React from 'react';
import {ReactSVG} from "react-svg";

const sliderList = [
    'gold', 'light', 'dark', 'silver'
];

export default class Slider extends React.PureComponent{

    state = {
        currentSlide: sliderList[0]
    };

    render() {
        const {currentSlide} = this.state;
        return (
            <div className="main-slider">
                <ReactSVG src="/icon/ellipse.svg" className="main-slider__ellipse"/>
                <img src="/images/person.png" alt="person" className="main-slider__person"/>
                <img src={`/images/main-slider/${currentSlide}.png`} alt={currentSlide} className="main-slider__element"/>
                {this.renderDots()}
            </div>
        )
    }

    renderDots = () => {
        return (
            <div className="main-slider__dots">
                <span>Выберите цвет<br/>светильника</span>
                <ul>
                    {sliderList.map(dot => {
                        return (
                            <li key={dot}>
                                <button type="button"
                                        onClick={() => this.setState({currentSlide: dot})}
                                        className={`dot ${dot}`} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
};
