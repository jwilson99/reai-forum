import React, {Component} from 'react';
import './Card.css';

class Card extends Component {

    classes = `Card ${this.props.color}`;

    render() {
        return (
            <div className={this.classes}>
                <div>
                    {this.props.name}
                </div>

                <div className="Card-label">
                    {this.props.subheader}
                </div>
            </div>

        );
    }
}

export default Card;
