import React from 'react';
import './ArrowButton.scss';
import {ReactSVG} from "react-svg";

const ArrowButton = (props) => {
    const {way, onClick, type} = props;
    return (
        <button type="button" className={`arrow-button ${way} ${type}`} onClick={onClick}>
            <ReactSVG src="/icon/arrow.svg"/>
        </button>
    )
};

export default ArrowButton;
