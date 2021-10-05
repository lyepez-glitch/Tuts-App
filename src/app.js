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
        <nav>
        <h2>My App</h2>
        <h3>Tutorials</h3>
        <h3>Add</h3>
      </nav>
      <form>
         <p>Title</p>
      <input id = 'title' type = 'text' value = 'pick a title'></input>
      <p>Description</p>
      <input id = 'description' value='type something here'></input>
      <br></br>
      <input id = 'submit' type = "submit" ></input>
      </form>
      </div>


    )
  }

}

export default App;