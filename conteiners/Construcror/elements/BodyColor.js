import React from 'react';
import {colors} from "../helper/paramsConstructor";
import Label from "../../../components/Label/Label";
import Advice from "./Advice";

export default class BodyColor extends React.Component {

    render() {
        const {value, onChange, advice, handleAdvice, currentClass} = this.props;
        let disabled = true;
        if (currentClass === 'pro+') disabled = false;
        return (
            <>
                <h4>Выберите <span>цвет</span> корпуса светильника:</h4>
                <div className="constructor__wrap">
                    <div className={`constructor__body-color ${disabled ? 'disabled' : ''}`}>
                        {colors.map(item => {
                            return (
                                <div className="constructor__color-item" key={item.code}>
                                    <Label
                                        active={item.code === value}
                                        children={item.name}
                                        code={item.code}
                                        onClick={onChange}
                                    />
                                    <div className={`constructor__color-img ${item.code === value ? 'active' : ''}`}>
                                        <img src={`/images/main-slider/${item.code}.png`} alt={item.code}/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <Advice
                        active={advice}
                        onChange={handleAdvice}
                    />
                </div>
            </>
        )
    }
}
