import React, {Component} from 'react';
import UserAvatar from './UserAvatar';
import {Link} from 'react-router-dom';
import './ForumItem.css';

class ForumItem extends Component {

    classes = `forum-item`;

    tags = this.props.tags;

    tagMap = this.tags.map ( (tag) => {
        return <div className="tag">
            {tag}
        </div>
    });

    render() {
        return (
            <Link to={this.props.link}>
            <div className={this.classes}>
                <div className="forum-left">
                    <UserAvatar author={this.props.author}/>
                    <div className="forum-title">
                        {this.props.title}
                    </div>
                </div>
                <div className="forum-right">
                    {this.tagMap}
                </div>
            </div>
            </Link>
        );
    }
}

export default ForumItem;
