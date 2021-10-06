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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event){

    this.setState({title: event.target.value})
    console.log(this.state.title)
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.state.title
    // this.state.description
    $ajax({
      url: '/tutorials',
      type = 'POST',
      data: {
        'title': this.state.title,
        'desc': this.state.description
      },
      contentType: 'application/json',
      success: function(result){
        console.log(result);
      },
      error: function(result){
        console.log(result)
      }
    })
  }

  handleDescChange(event){

    this.setState({description: event.target.value})
    console.log(this.state.description)
  }



  render() {
    return (
      <div>

      <form onSubmit = {this.handleSubmit}>
         <p>Title</p>
      <input id = 'title' type = 'text' defaultValue = 'pick a title' onChange = {this.handleTitleChange}></input>
      <p>Description</p>
      <input id = 'description' defaultValue='type something here'onChange = {this.handleDescChange}></input>
      <br></br>
      <input id = 'submit' type = "submit"  ></input>
      </form>
      </div>


    )
  }

}

export default App;