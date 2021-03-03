import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Post extends Component {
    render() {
        let title = this.props.history.location.aboutProps.title;
        let body = this.props.history.location.aboutProps.body;
        return (
            
            <div>
                <Link to="/">
                    <button>Back to posts</button>
                </Link>
                <div>{title}</div>
                <p>{body}</p>
            </div>
        )
    }
}

export default Post
