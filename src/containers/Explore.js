import React, { Component } from 'react'
import {connect} from 'react-redux';
import {updateStore, updateQuantity} from '../actions/shoppingActions';

class Explore extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text: ''
        }
    }
    onChange = (e) => { 
        console.log(e.target.value)
        this.setState({text: e.target.value})
    }
    handleClick = (e) => {
        const obj = { 
            quantity: this.state.text,
            name: e.target.id
        }
        this.props.updateQuantity(obj)
        console.log(e.target.id)
        console.log('updating')
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>{this.props.shop[0].item}</h2>
                <p>${this.props.shop[0].price}</p>
                <p>{this.props.shop[0].quantity}</p>
                <input 
                placeholder="enter quantity"
                onChange = {this.onChange.bind(this)}
                value={this.state.text}
                />
                <button id={this.props.shop[0].item} onClick={this.handleClick.bind(this)}>
                    Purchase
                </button>
            </div>
        )
    }
}

const mapStatetoProps = state => { 
    return { 
        shop: state.shoppingReducer
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        updateStore: store =>  dispatch(updateStore(store)),
        updateQuantity: quantity => dispatch(updateQuantity(quantity))
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Explore);