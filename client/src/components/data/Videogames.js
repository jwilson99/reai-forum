import React, {Component} from 'react';
import ForumItem from '../ForumItem';
import './data.css';

class Videogames extends Component {
    render() {
        const array = [
            {
                "id": 0,
                "title":"The new LoZ game is super fun!",
                "author":"Link",
                "post":"I have only beaten one Ganon boss, but it wasn't as hard as I thought it would be... Exploration is amazing though!",
                "following": false,
                "tags": ["New","Fantasy"],
                // This time would be updated based on a database post time
                "posted":"3 days ago",
                "replies":[]
            },
            {
                "id": 1,
                "title": "Mario: I'm stuck on the first level! :(",
                "author": "Luigi",
                "post":"Which button do I press to jump?",
                "following": true,
                "tags": ["Action","Help"],
                "posted":"2 days ago",
                "replies":[
                    {
                        "reply":"Get good.",
                        "author":"Mario",
                        "time":"a day ago"
                    }
                ]
            },
            {
                "id": 2,
                "title":"All I have are board games...",
                "author":"Grandma",
                "post":"You should make a new board game forum.",
                "following": false,
                "tags": [],
                "posted":"a day ago",
                "replies":[]
            },
            {
                "id": 3,
                "title":"Is the new Nintendo Switch worth the price??.",
                "author":"Unsure",
                "post":"I wanted a Switch, but they are sooo expensive...",
                "following": false,
                "tags": ["New","Consoles"],
                "posted":"a day ago",
                "replies":[
                    {
                        "reply":"Yes!! Buy it!!",
                        "author":"Nintendo",
                        "time":"a day ago"
                    }
                ]
            }
        ];

        const linkPrefix = '/videogames/';

        const videogames = array.map( (post) => {
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
                {videogames}
            </div>
        )
    }
}

export default Videogames;