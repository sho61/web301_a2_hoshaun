import React from 'react';

class Button extends React.Component {
    render() {
        const {title, task} = this.props;

        return (
            <img onClick={task} src={title} alt={title} />
        );
    }
}

export default Button;