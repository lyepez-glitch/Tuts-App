import React from 'react';
var currentTitle = '';

class App extends React.Component {
  constructor(props){
    super(props),
    this.state = {
      title: "n",
      description: "",
      name: 'Lucas'
    }
    this.setState = this.setState.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
  }

  handleTitleChange(event){

    this.setState({title: event.target.value})
    console.log(this.state.title)
  }

  handleDescChange(event){

    this.setState({description: event.target.value})
    console.log(this.state.description)
  }



  render() {
    return (
      <div>

      <form>
         <p>Title</p>
      <input id = 'title' type = 'text' defaultValue = 'pick a title' onChange = {this.handleTitleChange}></input>
      <p>Description</p>
      <input id = 'description' defaultValue='type something here'onChange = {this.handleDescChange}></input>
      <br></br>
      <input id = 'submit' type = "submit" ></input>
      </form>
      </div>


    )
  }

}

export default App;