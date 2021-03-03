import React, { Component } from 'react'
import {Link} from 'react-router-dom'

 class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <Link to="/">
                    <button>Back to Home</button>
                    </Link>    
            </div>
        )
    }
}

export default PageNotFound
