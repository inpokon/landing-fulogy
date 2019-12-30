import React from 'react';
import {ReactSVG} from "react-svg";

const advantagesList = [
    {
        text: 'Установка под размер Вашей кухни за 72 часа;',
        code: 'speed'
    },
    {
        text: 'Гарантия 5 лет;',
        code: 'policy'
    },
    {
        text: 'Бесконтактное управление светом;',
        code: 'tap'
    },
    {
        text: 'Эксклюзивность.',
        code: 'bright-stars'
    }
];

const Advantages = () => {
    return (
        <div className="container">
            <div className="main-advantages">
                {advantagesList.map(item => {
                    return (
                        <div className="main-advantages__item" key={item.code}>
                            <ReactSVG src={`/icon/${item.code}.svg`} className={`main-advantages__icon ${item.code}`}/>
                            <span className="main-advantages__desc">{item.text}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Advantages;
