import React from 'react';
import Main from './Main';
import User from '../components/User'
import {connect} from 'react-redux';
import {setName} from '../actions/userActions'
import Explore from './Explore'
class App extends React.Component{

  
 
  render(){
      console.log(this.props)
  return (
    <div className="container">
     <Main 
     />
     <User 
     username={this.props.user.name}
     />
     <Explore />
    </div>
  );
}
}

const mapStateToProps = state => {
    return { 
        user: state.userReducer,
        math: state.mathReducer,
        store: state.shoppingReducer
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        setName: name => dispatch(setName(name)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);