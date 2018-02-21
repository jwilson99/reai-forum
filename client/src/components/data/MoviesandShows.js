import React, {Component} from 'react';
import ForumItem from '../ForumItem';
import './data.css';

class MoviesandShows
    extends Component {
    render() {
        const array = [
            {
                "id": 0,
                "title":"Black Panther: a New Record!",
                "author":"Bucky",
                "post":"More pre-sales than any other movie so far! Awesome!",
                "following": true,
                "tags": ["New","Action"],
                // This time would be updated based on a database post time
                "posted":"3 days ago",
                "replies":[
                    {
                        "reply": "I saw it. It was great!",
                        "author": "Steve",
                        "time":"2 days ago"
                    }
                ]
            },
            {
                "id": 1,
                "title": "Game of Thrones: Who saw the last episode??",
                "author": "Hodor",
                "post":"I haven't had a chance to watch it...",
                "following": false,
                "tags": ["Fantasy","Episodes"],
                "posted":"2 days ago",
                "replies":[
                    {
                        "reply":"No.",
                        "author":"Troll",
                        "time":"a day ago"
                    }
                ]
            },
            {
                "id": 2,
                "title":"Is Star Wars good?? No spoilers!",
                "author":"Luke",
                "post":"Yes, I mean all of them.",
                "following": true,
                "tags": ["Sci-Fi","Action"],
                "posted":"2 days ago",
                "replies":[
                    {
                        "reply":"But it's been out for years...?",
                        "author":"Obi",
                        "time":"a day ago"
                    }
                ]
            }
        ];

        const linkPrefix = "/moviesandshows/";

        const moviesandshows = array.map( (post) => {
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
                {moviesandshows}
            </div>
        )
    }
}

export default MoviesandShows
;