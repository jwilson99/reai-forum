import React, {Component} from 'react';
import ForumItem from '../ForumItem';
import './data.css';

class Books extends Component {
    render() {
        const array = [
            {
                "id": 0,
                "title":"Harry Potter: is Snape a Deatheater???",
                "author":"Hermoine",
                "post":"I don't trust him.",
                "following": true,
                "tags": ["Book Discussions","Fiction","Fantasy"],
                // This time would be updated based on a database post time
                "posted":"3 days ago",
                "replies":[
                    {
                        "reply":"No way!!",
                        "author":"Snape",
                        "time":"2 days ago"
                    },
                    {
                        "reply":"@Snape but he is so shifty!",
                        "author":"Nevil",
                        "time":"a day ago"
                    }
                ]

            },
            {
                "id": 1,
                "title": "I wrote a book; come read it!",
                "author": "Brian",
                "post":"Here is a link to where you can find it: [LINK].",
                "following": false,
                "tags": ["Book Discussions","Non-Fiction"],
                "posted":"2 days ago",
                "replies":[
                    {
                        "reply":"Bump for more views...",
                        "author":"Brian",
                        "time":"a day ago"
                    }
                ]
            },
            {
                "id": 2,
                "title":"Book report due! Help!",
                "author":"Desperate",
                "post":"Has any read Moby Dick? This report is due tomorrow, and I haven't even started!",
                "following": false,
                "tags": ["Book Discussion","Help"],
                "posted":"a day ago",
                "replies":[]
            }
        ];

        const linkPrefix = '/books/';

        const books = array.map( (post) => {
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
                {books}
            </div>
        )
    }
}

export default Books;