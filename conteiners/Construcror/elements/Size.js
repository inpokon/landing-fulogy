import React from 'react';
import PropTypes from "prop-types";
import {sizes} from "../helper/paramsConstructor";
import InputRange from "react-input-range";

export default class Size extends React.Component {

    render() {
        const {value, onChange} = this.props;
        return (
            <>
                <h4>
                    Чтобы узнать приблизительную стоимость
                    <br/>
                    Вашего светильника, <span>выберите его длину:</span>
                </h4>
                <InputRange
                    minValue={sizes[0]}
                    maxValue={sizes[1]}
                    value={value}
                    onChange={onChange}
                    formatLabel={value => `${value.toFixed(1)}м.`}
                    step={0.1}
                />
            </>
        )
    }
}

Size.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func
};
