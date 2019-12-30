import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

export default class Card extends React.PureComponent {

    static propTypes = {
        codeImg: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        sizes: PropTypes.array.isRequired,
        price: PropTypes.number.isRequired,
        typeOne: PropTypes.string,
        typeTwo: PropTypes.string,
    };

    render() {
        const {codeImg, title, sizes, typeOne, typeTwo, price} = this.props;
        let allSize = 0;
        sizes.forEach(size => allSize += +size);
        const newSizes = sizes.map(size => size + ' м.').join(' + ');
        return (
            <div className="card">
                <img src={`/images/cards/${codeImg}.jpg`} alt={codeImg}/>
                <h4 className="card__title">
                    {title}
                    <br/>
                    {allSize.toFixed(2)} метра:
                </h4>
                <div className="card__desc">Длина: <span>{newSizes};</span></div>
                <div className="card__desc">{typeOne};</div>
                <div className="card__desc">{typeTwo};</div>
                <div className="card__price">
                    Цена: <span>{price} руб.</span>
                </div>
            </div>
        )
    }
}
