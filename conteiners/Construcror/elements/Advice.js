import React from 'react';
import Label from "../../../components/Label/Label";
import {ReactSVG} from "react-svg";

const Advice = (props) => {
    const {active, onChange} = props;
    let className = 'advice';
    if (active) className += ' active';
    return (
        <span className={className} onClick={() => onChange(!active)}>
            <Label active={active}>Нужен совет специалиста</Label>
            <ReactSVG src="/icon/question.svg" className="question"/>
        </span>
    )
};

export default Advice;
