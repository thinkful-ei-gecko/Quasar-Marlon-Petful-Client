import React from 'react';
import './Form.css'
import ApiService from '../../api-service';

export default class Form extends React.Component {
  state = {
    name: '',
  }

  handleTextInput = value => {
    this.setState({
      name: value
    })
  }
  
  handleSubmit = e => {
    e.preventDefault()
    console.log('Submit Fired!')
    console.log(JSON.stringify(this.state))
    let newName = JSON.stringify(this.state)
    ApiService.signUp(newName)
    .then(() => this.props.updatePeople());
  }

  render() {
    console.log(this.state)
    return(
      <fieldset>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor='Name'>Name</label>
          <input type='text' onChange={e => this.handleTextInput(e.target.value)}></input>
          <button type='submit'>Submit</button>
        </form>
        <h1>test</h1>
      </fieldset>
    )
  }
}