import React, {Component} from 'react';
import './SidebarItem.css';

class SidebarItem extends Component {

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

export default SidebarItem;
