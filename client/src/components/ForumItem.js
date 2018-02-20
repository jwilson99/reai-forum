import React, {Component} from 'react';
import './ForumItem.css';

class ForumItem extends Component {

    classes = `sidebar-item`;

    render() {
        return (
            <div className={this.classes}>
                <div>
                    {this.props.name}
                </div>
            </div>

        );
    }
}

export default ForumItem;
