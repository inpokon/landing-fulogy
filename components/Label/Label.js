import React from 'react';
import './Label.scss';

const Label = (props) => {
    const {children, active, onClick, code} = props;
    let className = 'label';
    if (active) className += ' active';
    return (
        <div className={className} onClick={() => {
            if (!!onClick) onClick(code)
        }}>
            <span className="label__circle" />
            <span className="label__text">{children}</span>
        </div>
    )
};

export default Label;
