import React, { Component } from 'react'
import {connect} from 'react-redux';
import App from './App';
import {setName} from '../actions/userActions'
class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text: ""
        }
    }
    onChange = e => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>Main Page</h1>
                    </div>
                </div>
                <input 
                placeholder="Enter name"
                onChange = {this.onChange.bind(this)}
                style={{width: '100%'}}
                value = {this.state.text}
                />
                <div className="row">
                    <div className="col-xs-12">
                        <button 
                        className="btn btn-primary"
                        onClick={() => this.props.setName(this.state.text)}
                        >
                            Change Username
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => { 
    return { 
        name: state.userReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setName : name => dispatch(setName(name))
    }
}
export default connect (mapStateToProps, mapDispatchToProps)(Main)