import React from 'react';
import './Price.scss';
import {ReactSVG} from "react-svg";
import Button from "../../components/Button/Button";
import LinkTag from "../../components/LinkTag/LinkTag";
import Title from "../../components/Title/Title";

const priceList = [
    ['Блок питания', '(не свистит,', 'не жужжит);'],
    ['Индивидуальное', 'производство', 'для Вашей кухни;'],
    ['Сенсор управления', 'светом очень удобный,', 'технологичный и стильный);'],
    ['Гарантия 5 лет;'],
    ['Демонтаж старых', 'светильников и', 'монтаж наших;'],
    ['Светодиоды высокой', 'цветопередачи, что делает', 'свет приближенным к', 'естественому солнечному', 'цвету.']
];

const Price = () => {

    return (
        <section className="price-wrap">
            <div className="container">
                <div className="price">
                    <ReactSVG src="/icon/inverted-commas.svg" className="inverted-commas" />
                    <div className="price__info">
                        <Title choice="white" classModification="price__title">Стоимость</Title>
                        <p className="price__desc">
                            Стоимость погонного метра
                            светильника fulogy от
                            <br/>
                            <span>2000 </span>руб.
                        </p>
                        <div className="price__input">
                            <span>
                                В цену входит:
                            </span>
                            <ReactSVG src="/icon/pointing-arrow.svg" className="pointing-arrow" />
                        </div>
                        <Button>Заказать звонок</Button>
                        <div className="price__phone">
                            <span>или звоните по телефону:</span>
                            <LinkTag href="tel:+78005056533"
                                     size="big"
                                     choice="secondary"
                            >
                                +7-(800)-505-65-33
                            </LinkTag>
                        </div>
                        <div className="price__social">
                            <a href="#">
                                <ReactSVG src="/icon/social/whatsapp.svg"/>
                            </a>
                            <a href="#">
                                <ReactSVG src="/icon/social/viber.svg"/>
                            </a>
                            <a href="#">
                                <ReactSVG src="/icon/social/telegram.svg"/>
                            </a>
                        </div>
                    </div>
                    <ul className="price__list">
                        {priceList.map((item, index) => {
                            return (
                                <li key={'item' + item[0]}>
                                    <span className="price__number">0{index + 1}</span>
                                    <span className="price__item">{item.map(elem => (<span key={elem}>{elem}<br/></span>))}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Price;
