import React from 'react';
import ReactDOM from 'react-dom'
 import App from './app.js';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: "",
      description: ""
      name: 'Lucas'
    }
  }
  render() {
    return <h1>Hello{this.props.name}</h1>
  }
}
ReactDOM.render(<App/>,document.getElementById('app'));

if(module.hot){
  module.hot.accept()
}



