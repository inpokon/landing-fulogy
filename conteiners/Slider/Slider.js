import React from 'react';
import './Slider.scss';
import ArrowButton from "../../components/ArrowButton/ArrowButton";

const sliderList = [
    'slide1',
    'slide2',
    'slide3',
    'slide4',
    'slide5',
    'slide6'
];

export default class Slider extends React.PureComponent {

    state = {
        currentSlide: sliderList[0]
    };

    render() {
        const {currentSlide} = this.state;
        const indexSlide = this.getIndexSlide();
        let typeLeft = 'default';
        let typeRight = 'default';
        if (indexSlide === 0) typeLeft = 'disabled';
        if (sliderList.length - 1 === indexSlide) typeRight = 'disabled';
        return (
            <section className="slider-wrap">
                <div className="slider">
                    <div className="slider__box-left">
                        <div className="slider__text">
                            Бесконтактная
                            <br/>
                            система управления
                        </div>
                        <div className="slider__text">
                            Светодиоды высокой
                            <br/>
                            цветопередачи
                        </div>
                        <div className="slider__text">
                            Алюминиевый корпус
                            <br/>
                            без перегрева
                        </div>
                    </div>
                    <div className="slider__item">
                        <img src={`/images/slider/${currentSlide}.jpg`} alt={currentSlide}/>
                        <div className="slider__num-slide">
                            <span className='slider__current-num'>{indexSlide + 1}</span>
                            <span className="slider__all-num">/{sliderList.length}</span>
                        </div>
                        <div className="slider__buttons">
                            <ArrowButton way="left" type={typeLeft} onClick={this.handleArrowLeft}/>
                            <ArrowButton way="right" type={typeRight} onClick={this.handleArrowRight}/>
                        </div>
                    </div>
                    <div className="slider__box-right">
                        <div className="slider__text">
                            Низкое
                            <br/>
                            энергопотребление
                        </div>
                        <div className="slider__text">
                            Легко монтируется
                            <br/>
                            самостоятельно
                        </div>
                        <div className="slider__text">
                            Удобно готовить
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    getIndexSlide = () => sliderList.indexOf(this.state.currentSlide);

    handleArrowLeft = () => this.setState({currentSlide : sliderList[this.getIndexSlide() - 1]});

    handleArrowRight = () => this.setState({currentSlide : sliderList[this.getIndexSlide() + 1]});

}
