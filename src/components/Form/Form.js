import React from 'react';
import './Form.css'

export default class Form extends React.Component {
  // 

  render() {
    return(
      <fieldset>
        <form>
          <label htmlFor='Name'>Name</label>
          <input type='text'></input>
        </form>
        <h1>test</h1>
      </fieldset>
    )
  }
}