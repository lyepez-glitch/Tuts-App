import React from 'react';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: "",
      description: "",
      name: 'Lucas'
    }
  }
  render() {
    return <h1>Hello{this.state.name}</h1>
  }
}

export default App;