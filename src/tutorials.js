import React from 'react';
class Tutorials extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description:'',
      status: 'Pending'

    }
  }
  render() {
    return (
      <div>
        <input type = 'text' defaultValue = 'search by title'></input>
        <button>Search</button>
        <div id ='tutContent'>
        <h2>Tutorials List</h2>
        <select id = 'select'>
          <option value = 'Tut1'>Tut1</option>
        </select>
        <div id = 'currentTutorial'>
          <p>Title: {this.state.title}</p>
          <p>Description: {this.state.description}</p>
          <p>Status: {this.state.status}</p>
          <button>Edit</button>
        </div>

        </div>


        <br></br>
        <button id = 'remove'>Remove All</button>

      </div>
    )
  }
}

export default Tutorials;