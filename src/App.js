import React from 'react';
import './App.css';
import Main from './components/Main';
import User from './components/User'

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       username: 'Amer'
    }
  }
  
  changeUsername (name){
    this.setState({
      username: name
    })
  }
  render(){
  return (
    <div className="container">
     <Main 
      changeUsername={this.changeUsername.bind(this)}
     />
     <User 
     username={this.state.username}
     />
    </div>
  );
}
}

export default App;
