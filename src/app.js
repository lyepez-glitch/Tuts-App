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
    return (
      <div>

      <form>
         <p>Title</p>
      <input id = 'title' type = 'text' defaultValue = 'pick a title'></input>
      <p>Description</p>
      <input id = 'description' defaultValue='type something here'></input>
      <br></br>
      <input id = 'submit' type = "submit" ></input>
      </form>
      </div>


    )
  }

}

export default App;