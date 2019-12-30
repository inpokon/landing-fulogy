import React from 'react';
import './Button.scss';
import PropTypes from "prop-types";

export default class Button extends React.Component {


    render() {
        const {children, type, onClick, choice, size} = this.props;
        return (
            <button type={type}
                    onClick={onClick}
                    className={`btn ${choice} ${size}`}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    type: 'button',
    onClick: (e) => e.preventDefault(),
    choice: 'secondary',
    size: 'middle',
};

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    onClick: PropTypes.func,
    choice: PropTypes.oneOf(['secondary', 'default']),
    size: PropTypes.oneOf(['middle']),
    children: PropTypes.node
};


