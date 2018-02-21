import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Card.css';

class Card extends Component {

    classes = `Card ${this.props.color}`;

    render() {
        return (

            <div className={this.classes}>
                <Link to={this.props.link} >
                <div className="Card-title">
                    <div className="Card-name">{this.props.name} </div>
                    <div className="Card-discussions">{this.props.discussions} Discussions</div>
                </div>

                <div className="Card-label">
                    {this.props.subheader}
                </div>
                </Link>
            </div>

        );
    }
}

export default Card;
