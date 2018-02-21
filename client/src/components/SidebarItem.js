import React, {Component} from 'react';
import './SidebarItem.css';

class SidebarItem extends Component {

    classes = `sidebar-item`;

    render() {
        return (
            <div className={this.classes}>
                <div className="sidebar-icon">
                    <i className="material-icons md-18 search-icon">{this.props.icon}</i>
                </div>
                <div>
                    {this.props.name}
                </div>
            </div>

        );
    }
}

export default SidebarItem;
