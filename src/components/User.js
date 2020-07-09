import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col=xs=12">
                        <p>Username: {this.props.username}</p>
                    </div>
                </div>
            </div>
        )
    }
}
