import React from 'react';
import Form from '../Form/Form';
import Pets from '../Pets/Pets';
import './Adoption.css'

export default class Adoption extends React.Component {
  render() {
    return (
      <div className='petContainer'>
        <Form></Form>
        <Pets
          cats={this.props.cats}
          dogs={this.props.dogs}
          updateCats={() => this.props.updateCats()}
          updateDogs={() => this.props.updateDogs()}
        ></Pets>
      </div>
    );
  }
}
