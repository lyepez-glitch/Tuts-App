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
      <div>
        <input id = 'searchtitle' type = 'text' defaultValue = 'search by title'></input>
        <br></br>
        <button id = 'search'>Search</button>

        <div id ='tutContent'>

        <h2 id = 'tutlist'>Tutorials List</h2>
        <select id = 'select'>
          <option value = 'Tut1'>Tut1</option>
        </select>
        <div id = 'currentTutorial'>
          <p>Title: {this.state.title}</p>
          <p>Description: {this.state.description}</p>
          <p>Status: {this.state.status}</p>
          <button id = 'edit'>Edit</button>

        </div>


        </div>

      </div>

      <br></br>

      <button id = 'remove'>Remove All</button>
      </div>
    )
  }
}

export default Tutorials;