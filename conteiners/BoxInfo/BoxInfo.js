import React from 'react';
import './BoxInfo.scss';
import Title from "../../components/Title/Title";
import {ReactSVG} from "react-svg";

const BoxInfo = () => {
    return (
        <section className="box-info">
            <Title choice="white" position="center">чтобы узнать стоимость светильника,</Title>
            <p className="box-info__desc">
                подходящего к Вашему дизайну,
                <br/>
                воспользуйтесь конструктором расчета стоимости:
            </p>
            <span className="box-info__wrap"><img src="/images/luminaire.png" alt="luminaire"/></span>
            <ReactSVG src="/icon/pointing-arrow.svg" className="box-info__arrow"/>
        </section>
    )
};

export default BoxInfo;
