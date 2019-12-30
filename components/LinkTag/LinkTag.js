import './LinkTag.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default class LinkTag extends React.Component {

    render() {
        const {href, children, onClick, choice, size, target} = this.props;
        return (
            <a href={href}
               onClick={onClick}
               className={`link ${choice} ${size}`}
               target={target}
            >
                {children}
            </a>
        )
    }
}

LinkTag.defaultProps = {
    href: '#',
    onClick: (e) => e.preventDefault(),
    choice: 'default',
    size: 'small',
    target: '_self'
};

LinkTag.propTypes = {
    href: PropTypes.string,
    onClick: PropTypes.func,
    choice: PropTypes.oneOf(['default', 'white', 'dark', 'secondary', 'primary']),
    size: PropTypes.oneOf(['small', 'middle', 'big']),
    children: PropTypes.node,
    target: PropTypes.oneOf(['_blank', '_self'])
};

