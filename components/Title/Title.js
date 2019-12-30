import React from 'react';
import './Title.scss';
import PropTypes from "prop-types";

export default class Title extends React.PureComponent {

    static propTypes = {
        classModification: PropTypes.string,
        choice: PropTypes.oneOf(['default', 'white']),
        position: PropTypes.oneOf(['left', 'center', 'right']),
        children: PropTypes.node,
    };

    static defaultProps = {
        classModification: '',
        choice: 'default',
        position: 'left'
    };

    render() {
        const {classModification, children, choice, position} = this.props;
        return <h2 className={`title ${choice} ${position} ${classModification}`}>{children}</h2>
    }
}
