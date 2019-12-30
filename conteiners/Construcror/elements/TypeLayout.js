import React from 'react';
import PropTypes from "prop-types";
import {typesLayout} from "../helper/paramsConstructor";
import Advice from "./Advice";
import Label from "../../../components/Label/Label";

export default class TypeLayout extends React.Component {
    render() {
        const {value, onChange, advice, handleAdvice} = this.props;
        return (
            <>
                <h4>
                    Выберите <span>тип планировки</span> кухни:
                </h4>
                <div className="constructor__wrap">
                    <div className="constructor__type-layout">
                        {typesLayout.map(item => {
                            return (
                                <div className="constructor__type-item" key={item.code}>
                                    <Label
                                        active={item.code === value}
                                        children={item.name}
                                        code={item.code}
                                        onClick={onChange}
                                    />
                                    <img src={`/images/constructor/${item.code}.png`} alt={item.code}/>
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

TypeLayout.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    advice: PropTypes.bool,
    handleAdvice: PropTypes.func
};
