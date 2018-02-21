import React, {Component} from 'react';
import UserAvatar from './UserAvatar';

class Discussion extends Component {


    render() {
        return (
            <div className="discussion">
                <div className="discussion-main">
                    {this.props.author}
                    {this.props.title}
                </div>

                <div class="discussion-reply">

                </div>
            </div>
        );
    }
}

export default Discussion;
