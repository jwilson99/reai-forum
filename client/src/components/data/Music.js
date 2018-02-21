import React, {Component} from 'react';
import ForumItem from '../ForumItem';
import './data.css';

class Music
    extends Component {
    render() {
        const array = [
            {
                "id": 0,
                "title":"First post!",
                "author":"Timberlake",
                "post":"First music post ever!",
                "following": false,
                "tags": ["New"],
                // This time would be updated based on a database post time
                "posted":"5 days ago",
                "replies":[
                    {
                        "reply": "First!",
                        "author": "Justin",
                        "time":"4 days ago"
                    }
                ]
            }
        ];

        const linkPrefix = '/music/';

        const music = array.map( (post) => {
            return <ForumItem
                title={post.title}
                author={post.author}
                following={post.following}
                tags={post.tags}
                link={linkPrefix + post.id}
                key={post.id}
            />
        });

        return (
            <div className="extra-container">
                {music}
            </div>
        )
    }
}

export default Music
;