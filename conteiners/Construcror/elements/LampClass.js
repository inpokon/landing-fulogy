import React from 'react';
import {lampClasses} from "../helper/paramsConstructor";
import Label from "../../../components/Label/Label";
import Advice from "./Advice";

export default class LampClass extends React.Component {

    render() {
        const {value, onChange, advice, handleAdvice} = this.props;
        return (
            <>
                <h4>Выберите <span>класс</span> светильника:</h4>
                <div className="constructor__wrap">
                    <div className="constructor__lamp-class">
                        {lampClasses.map(item => {
                            return (
                                <div className="constructor__lamp-item" key={item.code}>
                                    <Label
                                        active={item.code === value}
                                        code={item.code}
                                        onClick={onChange}
                                    >
                                     <span className="uppercase">{item.name}</span>
                                    </Label>
                                    <ul className="constructor__lamp-list">
                                        {item.list.map(element => {
                                            if (element.span !== undefined) {
                                                element = <span>{element.span}</span>
                                            }
                                            return (
                                                <li className="constructor__lamp-element" key={element}>
                                                    {element}
                                                </li>
                                            )
                                        })}
                                    </ul>
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
