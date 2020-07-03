import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className='d-flex align-items-center flex-column'>
                <h1>Home</h1>
                <h1>0</h1>
                <Link to='/display'>Back to Display</Link>
				{/* <Link to='/home'>Go to Home</Link> */}
            </div>
        )
    }
}
