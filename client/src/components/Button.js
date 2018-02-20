import React, {Component} from 'react';
import './Button.css';

class Button extends Component {

    classes = `Button ${this.props.color}`;

    render() {
        return (
            <button className={this.classes}>
                {this.props.name}
            </button>
        );
    }
}

export default Button;
