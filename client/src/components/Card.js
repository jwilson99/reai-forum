import React, {Component} from 'react';
import './Card.css';

class Card extends Component {

    classes = `Card ${this.props.color}`;

    render() {
        return (
            <div className={this.classes}>
                {this.props.name}
                <div className="Card-label">

                </div>
            </div>

        );
    }
}

export default Card;
