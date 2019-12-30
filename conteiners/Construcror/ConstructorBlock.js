import React from 'react';
import './Construcror.scss';
import {colors, lampClasses, typesLayout, blocks} from "./helper/paramsConstructor";
import Size from "./elements/Size";
import TypeLayout from "./elements/TypeLayout";
import LampClass from "./elements/LampClass";
import BodyColor from "./elements/BodyColor";
import Button from "../../components/Button/Button";
import {ReactSVG} from "react-svg";



export default class ConstructorBlock extends React.PureComponent {

    state = {
        currentSize: 3.4,
        currentType: typesLayout[0].code,
        adviceType: false,
        currentClass: lampClasses[0].code,
        adviceClass: false,
        currentColor: colors[0].code,
        adviceColor: false
    };

    render() {
        const {currentSize, currentType, adviceColor, currentClass, adviceClass, currentColor, adviceType} = this.state;
        return (
            <section className="constructor-wrap">
                <div className="constructor">
                    {this.renderBlocks()}
                </div>
                <Button onClick={() => {
                    console.log('размер: ', currentSize);
                    console.log('тип планировки: ', currentType);
                    console.log('совет по планировки: ', adviceType);
                    console.log('класс светильника: ', currentClass);
                    console.log('совет по классам: ', adviceClass);
                    console.log('Цвет корпуса: ', currentColor);
                    console.log('совет по цвету: ', adviceColor);
                }}>Получить расчет</Button>
            </section>
        )
    }

    renderBlocks = () => {

        return blocks.map((block, index) => {
            const {currentSize, currentType, adviceType, currentClass, adviceClass, currentColor, adviceColor} = this.state;
            let content = null;
            let srcSvg = 'ellipse2';
            let className = 'left';

            if (index % 2) {
                className = 'right'
            }

            switch (block) {
                case 'size':
                    content = <Size
                        value={currentSize}
                        onChange={this.handleSize}
                    />;
                    srcSvg = 'ellipse1';
                    break;
                case 'typeLayout' :
                    content = <TypeLayout
                        value={currentType}
                        advice={adviceType}
                        onChange={this.handleType}
                        handleAdvice={this.handleAdviceType}
                    />;
                    break;
                case 'lampClass':
                    content = <LampClass
                        value={currentClass}
                        advice={adviceClass}
                        onChange={this.handleClass}
                        handleAdvice={this.handleAdviceClass}
                    />;
                    break;
                case 'bodyColor':
                    content = <BodyColor
                        value={currentColor}
                        advice={adviceColor}
                        currentClass={currentClass}
                        onChange={this.handleColor}
                        handleAdvice={this.handleAdviceColor}
                    />;
                    break;
                default:
                    content = null;
                    break;
            }

            return (
                <div className="constructor__item-wrap" key={block}>
                    <ReactSVG src={`/icon/constructor/${srcSvg}.svg`} className={`constructor__ellipse ${className}`} />
                    <div className={`constructor__num constructor__num--${index + 1} ${className}`}>
                        {index + 1}
                    </div>
                    <div className="constructor__item">
                        {content}
                    </div>
                </div>

            )
        })
    };

    handleSize = currentSize => this.setState({currentSize});
    handleType = currentType => this.setState({currentType});
    handleAdviceType = adviceType => this.setState({adviceType});
    handleClass = currentClass => {
        let {currentColor} = this.state;
        if (currentClass === 'pro') {
            currentColor = colors[0].code;
        }
        this.setState({currentClass, currentColor});
    };
    handleAdviceClass = adviceClass => this.setState({adviceClass});
    handleColor = currentColor => this.setState({currentColor});
    handleAdviceColor = adviceColor => this.setState({adviceColor});
}
